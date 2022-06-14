const typeString = { type: "string" };
const typeNumber = { type: "number" };

const book = {
  type: "object",
  properties: {
    id: typeNumber,
    title: typeString,
  },
};

const addBookSchema = {
  body: {
    type: "object",
    required: ["title"],
    properties: {
      title: typeString,
    },
  },
  response: {
    200: typeString,
  },
};

const getBookSchema = {
  params: {
    id: typeNumber,
  },
  response: {
    200: book,
  },
};

const getBooksSchema = {
  response: {
    200: {
      type: "array",
      items: book,
    },
  },
};

const updateBookSchema = {
  body: {
    type: "object",
    required: ["title"],
    properties: {
      title: typeString,
    },
  },
  params: {
    id: typeNumber,
  },
  response: {
    200: typeString,
  },
};

const deleteBookSchema = {
  params: {
    id: typeNumber,
  },
  response: {
    200: typeString,
  },
};

module.exports = {
  addBookSchema,
  getBookSchema,
  getBooksSchema,
  updateBookSchema,
  deleteBookSchema,
};
