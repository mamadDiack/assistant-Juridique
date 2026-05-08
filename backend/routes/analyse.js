// backend/routes/analyse.js
const express = require("express");
const Groq = require("groq-sdk");
const LEGAL_SYSTEM_PROMPT = require("../prompts/legalPrompt");

const router = express.Router();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

/**
 * @swagger
 * /api/analyse:
 *   post:
 *     summary: Analyse une situation juridique selon le droit ivoirien
 *     tags: [Analyse Juridique]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - situation
 *             properties:
 *               situation:
 *                 type: string
 *                 example: Mon employeur ne me paie pas depuis 3 mois, que puis-je faire ?
 *     responses:
 *       200:
 *         description: Analyse réussie
 *       400:
 *         description: Requête invalide
 *       500:
 *         description: Erreur serveur
 */
router.post("/analyse", async (req, res) => {
  const { situation } = req.body;

  if (!situation || situation.trim().length < 10) {
    return res.status(400).json({
      error: "Veuillez décrire la situation avec plus de détails.",
    });
  }

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", // Meilleur modèle Groq pour du raisonnement
      temperature: 0.2, // Bas = réponses plus précises et stables
      max_tokens: 2000,
      messages: [
        { role: "system", content: LEGAL_SYSTEM_PROMPT },
        {
          role: "user",
          content: `Analyse cette situation selon le droit ivoirien :\n\n${situation}`,
        },
      ],
    });

    const rawText = completion.choices[0].message.content;

    // Extraire le JSON proprement
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("Format de réponse invalide");

    const analyse = JSON.parse(jsonMatch[0]);
    res.json({ success: true, analyse });
  } catch (error) {
    console.error("Erreur Groq:", error);
    res.status(500).json({
      error: "Erreur lors de l'analyse. Veuillez réessayer.",
      details: error.message,
    });
  }
});

module.exports = router;
