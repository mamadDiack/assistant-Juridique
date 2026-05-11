# AI Legal Assistant (Côte d'Ivoire)

Un assistant juridique intelligent spécialisé dans la législation de la République de Côte d'Ivoire. Cet outil utilise l'intelligence artificielle (via Groq SDK) pour analyser des situations juridiques et fournir des orientations basées sur les codes et lois ivoiriens.

## Fonctionnalités

- **Analyse de situation** : Décrivez votre problème juridique en langage naturel.
- **Citations de textes de loi** : Identification automatique des articles de loi pertinents (Code Pénal, Code Civil, Code du Travail, etc.).
- **Évaluation des risques** : Détection d'infractions potentielles et niveau de risque associé.
- **Scénarios possibles** : Exploration des différents dénouements juridiques selon les variables de la situation.
- **Recommandations** : Conseils d'orientation et rappel de l'importance de consulter un avocat.

## Stack Technique

### Backend

- **Node.js** & **Express**
- **Groq SDK** (Modèle : `llama-3.3-70b-versatile`)
- **Swagger/OpenAPI** pour la documentation de l'API
- **CORS** & **Dotenv**

### Frontend

- **React 19** (Vite)
- **Axios** pour les appels API
- **CSS3** pour un design moderne et responsive

## Structure du Projet

```text
aiLegalAssitant/
├── backend/                # Serveur Express & Logique AI
│   ├── controllers/        # Logique de traitement
│   ├── prompts/            # Prompts système pour l'IA
│   ├── routes/             # Points de terminaison API
│   ├── server.js           # Point d'entrée du serveur
│   └── swagger.js          # Configuration de la doc API
└── frontend/               # Application React
    ├── src/
    │   ├── api/            # Services d'appel API
    │   ├── components/     # Composants UI (Formulaires, Panels de résultats)
    │   └── styles/         # Styles CSS
```

## Installation

### 1. Cloner le projet

```bash
git clone https://gitlab.com/slaitecofficiel/assistant-juridique.git
cd assistant-juridique
```

### 2. Configuration du Backend

```bash
cd backend
npm install
```

Créez un fichier `.env` dans le dossier `backend` :

```env
PORT=3000
GROQ_API_KEY=votre_cle_api_groq
```

### 3. Configuration du Frontend

```bash
cd ../frontend
npm install
```

## Lancement

### Démarrer le Backend

```bash
cd backend
npm start
```

Le serveur sera disponible sur `http://localhost:3000`.
Documentation API (Swagger) : `http://localhost:3000/api-docs`

### Démarrer le Frontend

```bash
cd frontend
npm run dev
```

L'application sera disponible sur `http://localhost:5173`.

## Avertissement Légal

Cet assistant est un outil d'orientation basé sur l'IA. Il ne remplace en aucun cas les conseils juridiques d'un professionnel. Les informations fournies sont à titre indicatif et peuvent contenir des erreurs. Veuillez toujours consulter un avocat qualifié pour toute question juridique sérieuse.

## Licence

Ce projet est sous licence ISC.
