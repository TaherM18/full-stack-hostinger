// import dotenv from "dotenv";

// dotenv.config();

const env = Object.freeze({
    PORT: process.env.PORT || 4000,
    DATABASE_URL: process.env.DATABASE_URL || null,
    JWT_SECRET: process.env.JWT_SECRET || null,
});

// if (!env.PORT) {
//     throw new Error("PORT environment variable is not set");
// }

export default env;
