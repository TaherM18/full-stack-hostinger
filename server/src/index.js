import env from "./config/env.js";
import app from "./app.js";

app.listen(env.PORT, "0.0.0.0", () => {
  console.log(`Server is listening on 0.0.0.0:${env.PORT}`);
});