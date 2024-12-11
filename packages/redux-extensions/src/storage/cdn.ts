import { elizaLogger } from "@ai16z/eliza";
import { v4 as uuidv4 } from "uuid";
import {
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
    DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const BUCKET_NAME = process.env.AWS_BUCKET_NAME || "reduxhq-cdn";
const CDN_URL = `https://cdn.reduxhq.ai`;

const getClient = () => {
    return new S3Client({
        region: process.env.AWS_REGION || "auto",
        endpoint: `https://${process.env.AWS_ACCOUNT_ID}.r2.cloudflarestorage.com`,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
        },
    });
};

interface UploadResponse {
    success: boolean;
    url?: string;
    error?: string;
}

export async function urlToImage(url: string): Promise<Buffer> {
    try {
        const blob = await fetch(url).then((response) => response.blob());
        return Buffer.from(await blob.arrayBuffer());
    } catch (error) {
        elizaLogger.error("Error fetching image from URL:", error);
        throw error;
    }
}

function getKey(filename?: string) {
    const pref = filename || uuidv4();
    return `img-${pref.slice(0, 12)}`;
}

export async function urlToCdnUrl(url: string): Promise<string> {
    const image = await urlToImage(url);
    const pref = uuidv4();
    const key = `img-${pref.slice(0, 12)}`;
    const response = await uploadImage(image, key);
    return response.url;
}

/**
 * Uploads an image to the CDN
 * @param imageData - The image data as a Buffer or Blob
 * @param filename - The desired filename
 * @returns Promise<UploadResponse>
 */
export async function uploadImage(
    imageData: Buffer | Blob | string,
    filename?: string
): Promise<UploadResponse> {
    const key = getKey(filename);
    try {
        if (typeof imageData === "string" && imageData.startsWith("http")) {
            imageData = await urlToImage(imageData);
        }

        const command = new PutObjectCommand({
            Bucket: BUCKET_NAME,
            Key: key,
            Body: imageData,
            ContentType: "image/jpeg", // Adjust content type as needed
        });

        await getClient().send(command);

        elizaLogger.info(`Successfully uploaded image: ${key}`);
        return {
            success: true,
            url: `${CDN_URL}/${key}`,
        };
    } catch (error) {
        elizaLogger.error("Error uploading image:", error);
        return {
            success: false,
            error: error.message,
        };
    }
}

/**
 * Fetches an image from the CDN
 * @param key - The image key/filename
 * @returns Promise<Blob | null>
 */
export async function fetchImage(key: string): Promise<Blob | null> {
    try {
        const command = new GetObjectCommand({
            Bucket: BUCKET_NAME,
            Key: key,
        });

        const response = await getClient().send(command);

        if (!response.Body) {
            throw new Error("Empty response body");
        }

        // Convert stream to blob
        const blob = await new Response(response.Body as ReadableStream).blob();
        elizaLogger.info(`Successfully fetched image: ${key}`);
        return blob;
    } catch (error) {
        elizaLogger.error("Error fetching image:", error);
        return null;
    }
}

/**
 * Deletes an image from the CDN
 * @param key - The image key/filename
 * @returns Promise<boolean>
 */
export async function deleteImage(key: string): Promise<boolean> {
    try {
        const command = new DeleteObjectCommand({
            Bucket: BUCKET_NAME,
            Key: key,
        });

        await getClient().send(command);
        elizaLogger.info(`Successfully deleted image: ${key}`);
        return true;
    } catch (error) {
        elizaLogger.error("Error deleting image:", error);
        return false;
    }
}

/**
 * Utility function to get a full CDN URL from a key
 * @param key - The image key/filename
 * @returns string
 */
export async function getCdnUrl(key: string): Promise<string> {
    const command = new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
    });
    return getSignedUrl(getClient(), command, { expiresIn: 3600 });
}

/**
 * Utility function to get a key from a CDN URL
 * @param url - The full CDN URL
 * @returns string
 */
export function getKeyFromUrl(url: string): string {
    // Extract the key from the S3 presigned URL
    const urlObj = new URL(url);
    return urlObj.pathname.slice(1);
}

export async function testS3() {
    // open local test.png and upload to s3
    const image = Buffer.from("test file");
    const response = await uploadImage(image, "test");
    console.log(response);

    // get the url from the response
    const url = response.url;
    console.log(url);
    // url to image
    const image2 = await urlToImage(url);
    console.log(image2);
    // save the image to local
    //reupload to s3
    const response2 = await uploadImage(image2, "test2");
    console.log(response2);
}
