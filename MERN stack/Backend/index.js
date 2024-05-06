const express = require('express');
const path = require('path');
const app = express();

// Serve GrapeJS files from node_modules
app.use('/grapejs', express.static(path.join(__dirname, 'node_modules', 'grapejs')));

// Define route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html')); // Assuming your HTML template is in the "views" directory
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
