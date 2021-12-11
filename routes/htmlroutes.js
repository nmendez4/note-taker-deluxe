//
const path = require('path');

//
module.exports = function(app) {

// HTML get requests
// directs a user to specific content

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// if users route 'request' isn't found, default back to the index.html
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

};