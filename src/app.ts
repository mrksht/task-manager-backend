import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://task-manager-omega-tawny.vercel.app/"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/todos", todoRoutes);

export default app;
