import { Router } from "express";
import {
    CreateOneUser,
    DeleteUserByID,
    GetAllUsers,
    GetUserById,
    UpdateUserByID,
  } from "../controller/userController.js";

export const userRoute = Router();

userRoute.get("/",GetAllUsers)
userRoute.get("/:id",GetUserById)
userRoute.post("/",CreateOneUser)
userRoute.put("/:id",UpdateUserByID)
userRoute.delete("/:id",DeleteUserByID)
