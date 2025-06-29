import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import {
  createComplaint,
  myComplaints,
  updateStatus
} from "../controllers/complaint.controller.js";

const router = express.Router();
router.use(protect);

router.post("/", createComplaint);
router.get("/mine", myComplaints);
router.patch("/:id", updateStatus);

export default router;
