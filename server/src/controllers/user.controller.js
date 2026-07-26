import { ApiError, ApiResponse } from "../utils/apiResponse.js";

export const getUsers = async (req, res, next) => {
    // Simulate fetching users from a database or service
    const users = [
        { id: 1, name: "John Doe", email: "john.doe@example.com" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    ];

    // throw new ApiError(400, "This is a custom error message", { detail: "Additional error details" });

    res.send(new ApiResponse(200, "Users fetched successfully", users));
};
