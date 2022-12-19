import verifySignUp from "../middleware/verifySignUp.js";
import { signin, signup } from "../controllers/Auth.js";
import express from "express";

const router = express.Router();

router.post(
  "/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail],
  signup
);

router.post("/signin", signin);

export default router;
