import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  createHomework,
  getUserHomework,
  getHomeworkById,
  updateHomework,
  deleteHomework,
} from "../controller/homeworkController.js";

const router = express.Router();

// Protect all routes below
router.use(verifyToken);

router.post("/", createHomework);
router.get("/", getUserHomework);
router.get("/:id", getHomeworkById);
router.put("/:id", updateHomework);
router.delete("/:id", deleteHomework);

export default router;
