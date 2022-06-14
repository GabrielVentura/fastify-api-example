const {
  addBookSchema,
  getBookSchema,
  getBooksSchema,
  updateBookSchema,
  deleteBookSchema,
} = require("../controllers/schemas/books.js");

const {
  addBookHandler,
  getBooksHandler,
  getBookHandler,
  updateBookHandler,
  deleteBookHandler,
} = require("../controllers/handlers/books.js");

const getBooksOpts = {
  schema: getBooksSchema,
  handler: getBooksHandler,
};

const getBookOpts = {
  schema: getBookSchema,
  handler: getBookHandler,
};

const addBookOpts = {
  schema: addBookSchema,
  handler: addBookHandler,
};

const updateBookOpts = {
  schema: updateBookSchema,
  handler: updateBookHandler,
};

const deleteBookOpts = {
  schema: deleteBookSchema,
  handler: deleteBookHandler,
};

const bookRoutes = (fastify, options, done) => {
  fastify.get("/api/books", getBooksOpts);
  fastify.get("/api/books/:id", getBookOpts);
  fastify.post("/api/books/new", addBookOpts);
  fastify.delete("/api/books/:id", deleteBookOpts);
  fastify.put("/api/books/edit/:id", updateBookOpts);

  done();
};

module.exports = bookRoutes;
