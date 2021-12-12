// requires express packages to use this app
const express = require ('express');
const path = require('path');
const fs = require('fs');

// creats app as express erver
const app = express();
// sets a port
const PORT = process.env.PORT || 3001;

// uses express for data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// directs the server to route files
// one directs to the html and the other to the api
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

// app listener
app.listen(PORT, () => 
console.log(`Server is listening on PORT: ${PORT}`)); 