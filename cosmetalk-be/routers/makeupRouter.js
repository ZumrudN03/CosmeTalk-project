import { Router } from "express";
import {
  DeleteMakeUpProductByID,
  GetAllMakeUpProducts,
  GetMakeUpProductByID,
  PostOneMakeUpProduct,
  UpdateMakeUpProductByID,
} from "../controller/makeupController.js";

export const makeupRoute = Router();

makeupRoute.get("/", GetAllMakeUpProducts);
makeupRoute.get("/:id", GetMakeUpProductByID);
makeupRoute.post("/", PostOneMakeUpProduct);
makeupRoute.put("/:id", UpdateMakeUpProductByID);
makeupRoute.delete("/:id", DeleteMakeUpProductByID);
