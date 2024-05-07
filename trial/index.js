const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const fs = require('fs');
const Handlebars = require('handlebars');
const app = express();

// Set up Handlebars as the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/grapesjs', express.static(path.join(__dirname, 'node_modules/grapesjs/dist')));

// Routes
app.get('/', (req, res) => {
    // Read and compile the Handlebars template dynamically
    fs.readFile(path.join(__dirname, 'views', 'home.handlebars'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading template file:', err);
            return res.status(500).send('Internal Server Error');
        }

        // Compile the template
        const template = Handlebars.compile(data);

        // Render the template with GrapeJS initialization code
        const html = template({
            editorContainerId: 'container',
            grapesJsScript: `<script src="/grapesjs/grapes.min.js"></script>
                             <script>
                                 // Initialize GrapeJS
                                 const editor = grapesjs.init({
                                     container: '#container',
                                     // GrapeJS configuration options
                                 });
                             </script>`
        });

        // Send the rendered HTML to the client
        res.send(html);
    });
});

app.post('/save', (req, res) => {
    // Handle data submitted by GrapeJS (e.g., save to database)
    res.send('Data saved successfully');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
