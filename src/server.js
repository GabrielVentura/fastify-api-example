const PORT = process.env.PORT || 5000;

const fastify = require("fastify")({ logger: true });

const startServer = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

fastify.register(require("./routes/books"));

startServer();
