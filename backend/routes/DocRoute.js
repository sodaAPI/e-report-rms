import { DocMiddleware } from "../controllers/doc/middleware/DocMiddleware.js";
import { DocAPI } from "../controllers/doc/api/DocAPI.js";
import { DocIloanConsumer } from "../controllers/doc/iloanconsumer/DocIloanConsumer.js";
import { verifyUser } from "../middleware/AuthUser.js";
import express from "express";

const router = express.Router();

router.post("/mid", DocMiddleware, verifyUser);
router.post("/api", DocAPI, verifyUser);
router.post("/iloancon", DocIloanConsumer, verifyUser);

export default router;
