import mongoose from "mongoose";

export default mongoose.model(
  "Complaint",
  new mongoose.Schema(
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      attachments: [{ type: String }],
      status: {
        type: String,
        enum: ["Pending", "In Progress", "Resolved"],
        default: "Pending"
      },
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
    },
    { timestamps: true }
  )
);
