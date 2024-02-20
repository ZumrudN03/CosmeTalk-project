import { Router } from "express";
import {
  DeleteMakeUpProductByID,
  GetAllMakeUpProducts,
  GetMakeUpProductByID,
  CreateOneMakeUpProduct,
  UpdateMakeUpProductByID,
} from "../controller/makeupController.js";

export const makeupRoute = Router();

makeupRoute.get("/", GetAllMakeUpProducts);
makeupRoute.get("/:id", GetMakeUpProductByID);
makeupRoute.post("/", CreateOneMakeUpProduct);
makeupRoute.put("/:id", UpdateMakeUpProductByID);
makeupRoute.delete("/:id", DeleteMakeUpProductByID);
