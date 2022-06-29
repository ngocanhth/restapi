const { Book, Author } = require("../model/model");

const bookController = {
  //ADD A BOOK
  addABook: async (req, res) => {
    try {
      console.log('req', req);

      const newBook = new Book(req.body);

      console.log("newBook: ", newBook);

      const savedBook = await newBook.save();
      if (req.body.author) {
        const author = Author.findById(req.body.author);
        await author.updateOne({ $push: { books: savedBook._id } });
      }
      res.status(200).json(savedBook);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET ALL BOOKS
  getAllBooks: async (req, res) => {
    try {


      const allBooks = await Book.find();
      console.log("GET ALL BOOKS: ", allBooks);


      res.status(200).json(allBooks);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET A BOOK
  getABook: async (req, res) => {
    try {

      const book = await Book.findById(req.params.id).populate("author");

      console.log("GET A BOOK: ", book);

      console.log('a book: ', book);

      res.status(200).json(book);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE BOOK
  updateBook: async (req, res) => {
    try {
      console.log("UPDATE BOOK: ", req.params.id);

      const book = await Book.findById(req.params.id);
      await book.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE BOOK
  deleteBook: async (req, res) => {
    try {
      await Author.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      );
      await Book.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = bookController;
