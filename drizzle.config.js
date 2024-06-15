/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:hG4eLgj6tnDi@ep-still-sunset-a5ixux8f.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };
  