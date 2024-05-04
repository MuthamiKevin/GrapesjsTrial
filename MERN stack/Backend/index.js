import express from "express";
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from "./config.js";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.group(req)
    return res.status(234).send("welcome to our first app friends")
});


app.post('/books', async (req, res) => {
    try{    
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publisherYear
        ) {
            return res.status(400).send({message: 'Send all the required fields: title, title, author, publishYear',});
        } 
        const  newBooks = {
            title:request.body.title,
            author: request.body.author,
            publisherYear: request.body.publisherYear,

        }; 
        const book = await book.create(newBook);
        return res.status(201).send(book);

    }catch (error){
        console.log(error.message);
        res.status(500).send({message: error.message});

    }
});

app.get('/books', async(req, res) => {
    try{
        const book = await book.find({});
        return res.status(200).json(
            count, books.length,
            data, books,

        );
    }catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});
    }

});
const express = require('express');
const app = express();
const PORT = 3000;
 
// Multiple routing
const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();
 
router1.get('/user', function (req, res, next) {
    console.log("User Router Working");
    res.end();
});
 
router2.get('/admin', function (req, res, next) {
    console.log("Admin Router Working");
    res.end();
});
 
router3.get('/student', function (req, res, next) {
    console.log("Student Router Working");
    res.end();
});
 
app.use(router1);
app.use(router2);
app.use(router3);
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
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