import { Router } from "express";
import {
  DeleteSkinCareProductByID,
  GetAllSkinCareProducts,
  GetSkinCareProductByID,
  CreateOneSkinCareProduct,
  UpdateSkinCareProductByID,
} from "../controller/skincareController.js";

export const skincareRoute = Router();

skincareRoute.get("/", GetAllSkinCareProducts);
skincareRoute.get("/:id", GetSkinCareProductByID);
skincareRoute.post("/", CreateOneSkinCareProduct);
skincareRoute.put("/:id", UpdateSkinCareProductByID);
skincareRoute.delete("/:id", DeleteSkinCareProductByID);
