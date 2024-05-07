import express from "express";

// import {} from "./controllers/Controller.js";

export const router = express.Router();

router.get('/', (request, response) => {
    response.status(200).json({ success: 'get "/"' });
});