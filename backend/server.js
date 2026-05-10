require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./swagger");
const analyseRoute = require("./routes/analyse");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Sanity check
/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Vérifie l'état de santé de l'API
 *     responses:
 *       200:
 *         description: API opérationnelle
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: Assistant Juridique CI opérationnel
 */
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Assistant Juridique CI opérationnel" });
});

// Route principale
app.use("/api", analyseRoute);

// Middleware gestion d'erreurs global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Erreur serveur interne" });
});

app.listen(PORT, () => {
  console.log(` Serveur démarré sur http://localhost:${PORT}`);
});
