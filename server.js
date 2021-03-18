const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");


// create express app
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// Require produto routes
const produtoRoutes = require('./src/router/produto.routes')
// using as middleware
app.use('/api/v1/produtos', produtoRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


