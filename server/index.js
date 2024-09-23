import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
import healthapi from "./controllers/health.js";
import {HandlePageNotFound} from "./controllers/error.js"
import {
  postBook,
  getBook,
  getBookId,
  putBook,
  deleteBook,
} from "./controllers/book.js";



const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", healthapi);

app.post("/book", postBook);

app.get("/books", getBook);

app.get("/book/:id", getBookId);

app.put("/book/:id", putBook);

app.delete("/book/:id", deleteBook);

app.use("*", HandlePageNotFound);

const DBconnections = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL);
  if (conn) {
    console.log(`MongoDB Connected ✅✅`);
  } else {
    console.log(`MongoDB  not connected❌`);
  }
};
DBconnections();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`);
});
