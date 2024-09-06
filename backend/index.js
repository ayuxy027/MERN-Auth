import express from "express";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth" , authRoutes)

app.listen(3000, () => {
    connectDB();
  console.log("Server is running on http://localhost:3000");
});