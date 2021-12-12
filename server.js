// requires express packages to use this app
const express = require ('express');
const path = require('path');
const fs = require('fs');
const apiroutes = require('./routes/apiroutes');
const htmlroutes = require('./routes/htmlroutes');

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
app.use('/api', apiroutes);
app.use('/', htmlroutes);

// app listener
app.listen(PORT, function() {
    console.log(`Server listening on PORT: ${PORT}`);
});