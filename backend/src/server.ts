import express from "express";
import bodyParser from "body-parser";

import { router } from "./routes/routes.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

app.listen(process.env.BACKEND_PORT_INTERNAL, () => {
    console.log(`Server is listening on port ${process.env.BACKEND_PORT_INTERNAL}`);
});
