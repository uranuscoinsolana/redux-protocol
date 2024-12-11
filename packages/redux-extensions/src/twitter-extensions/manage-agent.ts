import { elizaLogger } from "@ai16z/eliza";
import { db, schema } from "../db";
import { AgentPrompt } from "../db/schema";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

export async function savePrompt(settings: AgentPrompt): Promise<AgentPrompt> {
    try {
        const prompt: AgentPrompt = {
            id: uuidv4(),
            prompt: settings.prompt,
            agentId: settings.agentId,
            version: settings.version,
            enabled: settings.enabled,
        };
        const result = await db
            .insert(schema.agentPrompts)
            .values(prompt)
            .returning();
        return result[0];
    } catch (error) {
        elizaLogger.error("Error saving prompt:", error);
        throw error;
    }
}

export async function getPrompt(agentId: string): Promise<AgentPrompt | null> {
    const result = await db
        .select()
        .from(schema.agentPrompts)
        .where(eq(schema.agentPrompts.agentId, agentId))
        .limit(1);
    return result[0] || null;
}

export async function updatePrompt(
    id: string,
    settings: Partial<AgentPrompt>
): Promise<AgentPrompt> {
    try {
        const result = await db
            .update(schema.agentPrompts)
            .set(settings)
            .where(eq(schema.agentPrompts.id, id))
            .returning();
        return result[0];
    } catch (error) {
        elizaLogger.error("Error updating prompt:", error);
        throw error;
    }
}
