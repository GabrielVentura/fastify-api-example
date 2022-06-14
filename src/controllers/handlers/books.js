const books = require("../../cloud/books.js");

const getBookHandler = (req, reply) => {
  const { id } = req.params;

  const book = books.find((book) => book.id === id);

  return book
    ? reply.send(book)
    : reply.status(404).send(new Error("Book not found"));
};

const getBooksHandler = (req, reply) => {
  reply.send(books);
};

const addBookHandler = (req, reply) => {
  const { title } = req.body;

  const id = books.length + 1;
  books.push({ id, title });

  reply.send("Book added");
};

const updateBookHandler = (req, reply) => {
  const { id } = req.params;
  const { title, body } = req.body;

  const book = books.find((book) => book.id === id);
  if (!book) {
    return reply.status(404).send(new Error("Book doesn't exist"));
  }

  book.title = title;

  return reply.send("Book updated");
};

const deleteBookHandler = (req, reply) => {
  const { id } = req.params;

  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex === -1) {
    return reply.status(404).send(new Error("Book doesn't exist"));
  }

  books.splice(bookIndex, 1);

  return reply.send("Book deleted");
};

module.exports = {
  addBookHandler,
  getBookHandler,
  getBooksHandler,
  updateBookHandler,
  deleteBookHandler,
};
