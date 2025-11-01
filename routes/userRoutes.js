import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Example protected route: get logged-in user info
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "User profile fetched successfully",
    user: req.user,
  });
});

export default router;
