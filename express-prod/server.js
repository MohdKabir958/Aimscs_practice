import express from "express";
import morgan from "morgan";
import studentRoutes from "./src/routes/studentroutes.js";
import cors from "cors";

const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use((req, res, next) => {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.header('Pragma', 'no-cache');
  res.header('Expires', '0');
  next();
});

// routes
app.use("/", studentRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});