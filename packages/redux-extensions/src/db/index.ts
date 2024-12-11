import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import * as queries from "./queries";

const client = postgres(process.env.POSTGRES_URL, { prepare: false });
const db = drizzle(client, { schema, casing: "snake_case" });

export { db, schema, queries };
