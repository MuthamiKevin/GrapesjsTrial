const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Send a response to the client
  res.send('<script>window.open("https://example.com", "_blank");</script>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
