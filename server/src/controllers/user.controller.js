import { ApiResponse } from "../utils/apiResponse.js";

export const getUsers = async (req, res, next) => {
  try {
    // Simulate fetching users from a database or service
    const users = [
      { id: 1, name: "John Doe", email: "john.doe@example.com" },
      { id: 2, name: "Jane Smith", email: "jane.smith@example.com" }
    ];

    res.send(new ApiResponse(200, "Users fetched successfully", users));
  } catch (error) {
    next(error);
  }
};
