import type { Config } from "@/types";

const config = Object.freeze({
  API_URL: import.meta.env.VITE_API_URL,
}) satisfies Config;


export default config;