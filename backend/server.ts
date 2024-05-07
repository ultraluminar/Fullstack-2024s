import express, { request, response } from "express";
import bodyParser from "body-parser";

import { router } from "./src/routes/routes.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json);

app.get('/', (request, response) => {
    response.status(200).json({ success: 'get "/"' });
});

app.listen(process.env.BACKEND_PORT_INTERNAL, () => {
    console.log(`Server is listening on port ${process.env.BACKEND_PORT_INTERNAL}`);
});
