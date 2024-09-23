import Book from "../models/Book.js";



const postBook = async(req, res) => {
  const { name, category, image, description } = req.body;

  const newBook = new Book({
    name: name,
    category: category,
    image: image,
    description: description,
  });

 const savedBook = await newBook.save();
  res.json({
    success: true,
    message: "New Book Added Successfully",
    data: savedBook,
  });
}

const getBook = async(req, res) => {
  const AllBooks = await Book.find().sort({createdAt:-1})
  res.json({
    success: true,
    message: `All Books show in successfully `,
    data: AllBooks,
  });
};

const getBookId = (req, res) => {
  const { id } = req.params;

  const book = books.find((b) => b.id == id);

  res.json({
    success: book ? true : false,
    data: book || null,
    message: book ? "Book is shown in successfull" : "Book is not found",
  });
};

const putBook = (req, res) => {
  const { name, category, image, description } = req.body;

  const { id } = req.params;

  let index = -1;

  books.forEach((book, i) => {
    if (book.id == id) {
      index = i;
    }
  });

  const newbookOject = {
    name,
    category,
    image,
    description,
  };
  if (index == -1) {
    return res.json({
      success: false,
      message: `Book not found for id ${id}`,
      data: null,
    });
  } else {
    books[index] = newbookOject;

    res.json({
      success: true,
      message: "book updated successfull",
      data: newbookOject,
    });
  }
};

const deleteBook = (req, res) => {
  const { id } = req.params;

  const book = Book.deleteOne({ id: id });

  res.json({
    success: true,
    message: "Book Remove Successfully",
    data: book,
  });
};

export { postBook, getBook, getBookId, putBook, deleteBook };
