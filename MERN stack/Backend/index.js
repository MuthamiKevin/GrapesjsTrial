import express from "express";
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from "./config.js";

const app = express();

app.get('/', (req, res) => {
    console.group(req)
    return res.status(234).send("welcome to our first app friends")
});



mongoose
    .connect(mongoDBURL)
    .then (() => {
        console.log('app connected to database');
        app.listen(PORT, () => {
            console.log(`app is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to database:', error);
    })