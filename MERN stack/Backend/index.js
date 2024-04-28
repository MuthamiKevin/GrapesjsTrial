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
        return res.status(200).json(book);
    }catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});
    }

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