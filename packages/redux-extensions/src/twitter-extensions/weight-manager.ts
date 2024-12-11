import { elizaLogger } from "@ai16z/eliza";
import { db } from "../db";
import { tweets } from "../db/schema";
import { cache, Cache } from "../db/schema";
import { desc, eq } from "drizzle-orm";
interface ContentType {
    type: string;
    baseWeight: number;
}

const CONTENT_TYPES: ContentType[] = [
    { type: "STREAM", baseWeight: 40 },
    { type: "HISTORICAL", baseWeight: 20 },
    { type: "FUTURE", baseWeight: 20 },
    { type: "RANDOM", baseWeight: 20 },
];

const COOLDOWN_PERIOD = 5; // Number of recent tweets to consider
const WEIGHT_DECAY = 0.5; // How much to reduce weight for recent usage

export const getNextTweetType = async (): Promise<string> => {
    // random limit between 6 - 8
    const limit = Math.floor(Math.random() * 3) + 6;
    const lastTweets = await db
        .select()
        .from(tweets)
        .orderBy(desc(tweets.createdAt))
        .limit(limit);
    const tweetTypes = lastTweets.map((tweet) => tweet.mediaType);
    if (!tweetTypes.includes("image")) {
        return "image";
    }
    return "text";
};

export class WeightManager {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private async getRecentTweets(): Promise<any> {
        try {
            const result = await db
                .select()
                .from(cache)
                .where(eq(cache.key, "recent_tweet_types"))
                .limit(1);

            return result;
        } catch (error) {
            elizaLogger.error("Error fetching recent tweets:", error);
            return [];
        }
    }

    private async updateRecentTweets(types: string[]): Promise<void> {
        try {
            const cacheItem: Partial<Cache> = {
                key: "recent_tweet_types",
                value: JSON.stringify(types),
            };
            await db
                .insert(cache)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .values(cacheItem as any)
                .onConflictDoUpdate({
                    target: [cache.key],
                    set: cacheItem,
                });
        } catch (error) {
            elizaLogger.error("Error updating recent tweets:", error);
        }
    }

    private adjustWeights(recentTypes: string[]): Map<string, number> {
        const weights = new Map(
            CONTENT_TYPES.map((ct) => [ct.type, ct.baseWeight])
        );

        // Adjust weights based on recent usage
        recentTypes.slice(-COOLDOWN_PERIOD).forEach((type) => {
            if (weights.has(type)) {
                weights.set(type, weights.get(type)! * WEIGHT_DECAY);
            }
        });

        // Normalize weights
        const totalWeight = Array.from(weights.values()).reduce(
            (a, b) => a + b,
            0
        );
        weights.forEach((weight, type) => {
            weights.set(type, (weight / totalWeight) * 100);
        });

        return weights;
    }

    public async selectContentType(): Promise<string> {
        const recentTypes = await this.getRecentTweets();
        const adjustedWeights = this.adjustWeights(recentTypes);

        // Select content type based on weights
        const random = Math.random() * 100;
        let cumulativeWeight = 0;

        for (const [type, weight] of adjustedWeights) {
            cumulativeWeight += weight;
            if (random <= cumulativeWeight) {
                // Update recent types
                recentTypes.push(type);
                if (recentTypes.length > COOLDOWN_PERIOD) {
                    recentTypes.shift();
                }
                await this.updateRecentTweets(recentTypes);
                return type;
            }
        }

        return CONTENT_TYPES[0].type; // Fallback to first type
    }

    /**
     * This method is used to get the next tweet type based on the last 5 tweets.
     * If the last 5 tweets do not include an image, it will return "image".
     * Otherwise, it will return "text".
     * @returns {Promise<string>}
     */
    public async getNextTweetType(): Promise<string> {
        // random limit between 4-8
        const limit = Math.floor(Math.random() * 5) + 4;
        const lastTweets = await db
            .select()
            .from(tweets)
            .orderBy(desc(tweets.createdAt))
            .limit(limit);
        const tweetTypes = lastTweets.map((tweet) => tweet.mediaType);
        if (!tweetTypes.includes("image/jpeg")) {
            return "image/jpeg";
        }
        return "text";
    }
}
