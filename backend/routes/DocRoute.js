import {
  DocMiddleware,
//   GetDocMiddleware,
} from "../controllers/doc/DocMiddleware.js";
import { verifyUser } from "../middleware/AuthUser.js";
import express from "express";

const router = express.Router();

router.post("/mid", DocMiddleware, verifyUser);
// router.get("/mid", GetDocMiddleware, verifyUser);

export default router;
