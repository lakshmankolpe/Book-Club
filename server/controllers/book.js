import Book from "../models/Book.js";

const postBook = async (req, res) => {
  const { name, category, image, description, price, author } = req.body;

  const newBook = new Book({
    name: name,
    category: category,
    image: image,
    author: author,
    price: price,
    description: description,
  });

  const savedBook = await newBook.save();
  res.json({
    success: true,
    message: "New Book Added Successfully",
    data: savedBook,
  });
};

const getBook = async (req, res) => {
  const AllBooks = await Book.find().sort({ createdAt: -1 });
  res.json({
    success: true,
    message: `All Books show in successfully `,
    data: AllBooks,
  });
};

const getBookId = async (req, res) => {
  const { id } = req.params;

  const book = await Book.findById(id);
  res.json({
    success: book ? true : false,
    data: book || null,
    message: book ? "Book is shown in successfull" : "Book is not found",
  });
};

const putBook = async (req, res) => {
  try {
    const { name, category, image, description, author, price } = req.body;

    const { id } = req.params;
    await Book.updateOne(
      { _id: id },
      {
        $set: {
          name: name,
          category: category,
          image: image,
          description: description,
          price: price,
          author: author,
        },
      }
    );

    const updatedBook = await Book.findById(id);
    res.json({
      success: true,
      message: "Book Updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;

  await Book.deleteOne({ _id: id });
  res.json({
    message: "book deleted sucessfully",
    success: true,
    data: null,
  });
};
export { postBook, getBook, getBookId, putBook, deleteBook };
