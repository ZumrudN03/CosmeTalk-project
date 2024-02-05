import { Router } from "express";
import {
  DeleteSkinCareProductByID,
  GetAllSkinCareProducts,
  GetSkinCareProductByID,
  PostOneSkinCareProduct,
  UpdateSkinCareProductByID,
} from "../controller/skincareController.js";

export const skincareRoute = Router();

skincareRoute.get("/", GetAllSkinCareProducts);
skincareRoute.get("/:id", GetSkinCareProductByID);
skincareRoute.post("/", PostOneSkinCareProduct);
skincareRoute.put("/:id", UpdateSkinCareProductByID);
skincareRoute.delete("/:id", DeleteSkinCareProductByID);
