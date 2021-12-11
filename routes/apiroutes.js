// require fs 
const fs = require('fs');

module.exports = function(app) {
    // API get request(s)
    // handles when a user visits a page
    app.get('/api/notes', function(req, res) {
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            dbData = JSON.parse(data);
            res.send(dbData);
        });
    });

    // API post request(s)
    // handles a users submissions from the page, to send to the server
    app.post('/api/notes', function (req,res) {
        fs.writeFile('./db/db.json', (err, data) => {
            if (err) throw err;
            dbData = JSON.parse(data);
            dbData.push(userNotes);
            let number = 1;
            dbData.forEach((note, index) => {
                note.id = number;
                number++;
                return dbData;
            });
            console.log(dbData);

            stringData = JSON.stringify(dbData);

            fs.writeFile('./db/db.json', stringData, (err,data) => {
                if (err) throw err;
            });
        });
        res.send('Thank you for your note!');
    });

}