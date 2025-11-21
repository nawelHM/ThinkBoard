import express from "express";
import noteRoutes from "./src/routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./src/middelware/rateLimiter.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname =path.resolve();
//middleware
if(process.env.NODE_ENV !== "production"){
  app.use(cors({
  origin: "http://localhost:5174"
}));
}
app.use(express.json()); // pour lire req.body , this middelware will parse Json bodies
app.use(rateLimiter);

//our simple custom middlware
app.use((req, res, next) => {
  console.log(`Req method is ${req.method} and Req URL is ${req.url}`);
  next();
});

app.use("/api/notes", noteRoutes);


 
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server started on Port: ", PORT);
  });
});

//mongodb+srv://nawwelhammouda_db_user:si7cqjExNMAPO1vc@cluster0.aewlsuh.mongodb.net/?appName=Cluster0
