const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./server/routes/web') //web routes
const apiRoutes = require('./server/routes/api'); //api routes
const connection = require("./server/config/db"); //mongodb connection

const port = process.env.PORT || 3001
const app = express()

const webpack = require('webpack');
const config = require('./webpack.config');


app.enable('trust proxy');
// Set body parser middleware
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Enable cross-origin access through the CORS middleware
// NOTICE: For React development server only!
if (process.env.CORS) {
  app.use(cors());
}
// serve static assets normally
app.use(express.static(__dirname + '/public'))


///app.use('/', routes);
app.use('/api', apiRoutes);

app.get('*', function (request, response){
  response.sendFile(path.join(__dirname, 'public', 'index.html'))
})
// starting express server
app.listen(port, function() {
 console.log("Server is running at : http://localhost:" + port);
});