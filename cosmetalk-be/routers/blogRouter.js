import { Router } from "express";
import {
  DeleteBlogByID,
  GetAllBlogs,
  GetBlogByID,
  CreateOneBlog,
  UpdateBlogByID,
} from "../controller/blogController.js";

export const blogRoute = Router();

blogRoute.get("/", GetAllBlogs);
blogRoute.get("/:id", GetBlogByID);
blogRoute.post("/", CreateOneBlog);
blogRoute.put("/:id", UpdateBlogByID);
blogRoute.delete("/:id", DeleteBlogByID);
