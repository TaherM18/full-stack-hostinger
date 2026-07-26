import express from "express";
import cors from "cors";
import { ApiResponse } from "./utils/apiResponse.js";
import userRouter from "./routes/user.router.js";


const app = express();
const corsOptions = {
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// #region Middlewares
app.use(express.json());
app.use(cors(corsOptions))
// #endregion

// #region Routes
app.use("/api/users", userRouter);
// #endregion

// #region Error Handling Middleware
app.use((error, req, res, next) => {
    console.error(error.message);
    const statusCode = error.statusCode || 500;
    
    res.status(statusCode).json(new ApiResponse(statusCode, error.message, error.errors || null));
});
// #endregion

export default app;