import { Router } from "express";
import { createCommentForMakeup, deleteCommentForMakeUp, getAvarageForMakeUp, getCommentsForMakeup, updateCommentForMakeup } from "../controller/makeupReviewController.js";


export const makeupReviewRoute = Router();

makeupReviewRoute.post("/", createCommentForMakeup);
makeupReviewRoute.get("/:makeupId", getCommentsForMakeup);
makeupReviewRoute.put("/", updateCommentForMakeup);
makeupReviewRoute.delete("/", deleteCommentForMakeUp);
makeupReviewRoute.post("/makeupavarage", getAvarageForMakeUp);