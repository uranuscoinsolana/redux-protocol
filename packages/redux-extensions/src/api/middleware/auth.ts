import { Request, Response, NextFunction } from "express";
import { elizaLogger } from "@ai16z/eliza";

export interface AuthenticatedRequest extends Request {
    isAuthenticated?: boolean;
}

export function authMiddleware(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization?.split(" ")[1];
    const configuredToken = process.env.API_AUTH_TOKEN;

    if (!configuredToken) {
        elizaLogger.warn("API_AUTH_TOKEN not configured");
        next();
        return;
    }

    if (!authToken) {
        return res
            .status(401)
            .json({ error: "No authentication token provided" });
    }

    if (authToken !== configuredToken) {
        return res.status(403).json({ error: "Invalid authentication token" });
    }

    req.isAuthenticated = true;
    next();
}
