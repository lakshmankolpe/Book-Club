import { Schema, model } from "mongoose";
const bookSchema = new Schema(
  {
    name: String,
    category: String,
    image: String,
    price: Number,
    description: String,
  },
  {
    timestamps: true,
  }
);
const Book = model("Book", bookSchema);
export default Book;
