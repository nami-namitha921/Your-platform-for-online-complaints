import expresis from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import complaintRoutes from "./routes/complaint.routes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));

app.get("/", (_, res) => res.send("ResolveNow API running"));
app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅  API running on :${PORT}`));
