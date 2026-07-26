import type { Config } from "@/types";

const env = Object.freeze({
//   API_URL: import.meta.env.VITE_API_URL || "http://localhost:4000/api",
  API_URL: "http://localhost:4000/api",
}) satisfies Config;


export default env;