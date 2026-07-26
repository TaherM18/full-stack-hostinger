// import dotenv from "dotenv";

// dotenv.config();

const env = Object.freeze({
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
});

if (!env.PORT) {
    throw new Error("PORT environment variable is not set");
}

export default env;
