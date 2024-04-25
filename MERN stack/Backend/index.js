import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get('/', (req, res) => {
    console.group(req)
    return res.status(234).send("welcome to our first app friends")
});

app.listen(PORT, () => {
    console.log(`app is listening to port: ${PORT}`);
});
