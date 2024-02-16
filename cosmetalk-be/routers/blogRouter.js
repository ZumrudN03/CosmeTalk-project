import { Router } from "express";
import {
  DeleteBlogByID,
  GetAllBlogs,
  GetBlogByID,
  PostOneBlog,
  UpdateBlogByID,
} from "../controller/blogController.js";

export const blogRoute = Router();

blogRoute.get("/", GetAllBlogs);
blogRoute.get("/:id", GetBlogByID);
blogRoute.post("/", PostOneBlog);
blogRoute.put("/:id", UpdateBlogByID);
blogRoute.delete("/:id", DeleteBlogByID);
