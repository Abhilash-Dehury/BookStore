import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
const URI = process.env.MongoDBURI;

  try {
     mongoose.connect(URI);
    console.log("Connected to MongoDB");

  } catch (error) {
    console.log("MongoDB connection failed:", error);
   
  }

  app.use("/book",bookRoute);
  app.use("/user",userRoute)


  app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
  });




