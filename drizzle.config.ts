export default {
    schema: "./packages/redux-extensions/src/db/schema.ts",
    out: "./db/migrations",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL,
    },
};
