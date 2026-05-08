const swaggerJsdoc = require("swagger-jsdoc");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de l'assistant juridique",
      version: "1.0.0",
      description:
        "API pour analyser des situations juridiques en droit ivoirien",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js", "./server.js"],
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
