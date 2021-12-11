// requires express packages to use this app
const express = require ('express');

// 
const app = express();
// sets a port
const PORT = process.env.PORT || 3001;

// uses express for data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// directs the server to route files
// one directs to the html and the other to the api
require('');
require('');

// app listener
app.listen(PORT, function() {
    console.log(`Server is listening on PORT: ${PORT}`);
})