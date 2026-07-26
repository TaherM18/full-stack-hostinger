import env from "./config/env.js";
import app from "./app.js";
// import dotenv from "dotenv";
// dotenv.config();

app.listen(env.PORT, "0.0.0.0", () => {
  console.log(`Server is running on: http://localhost:${env.PORT}`);
});