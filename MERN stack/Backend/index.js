import express from "express";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.group(req)
    return res.status(234).send("welcome")
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