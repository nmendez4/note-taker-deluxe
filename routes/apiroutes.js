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
    app.post('/api/notes', function (req, res) {
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

            fs.writeFile('/db/db.json', stringData, (err,data) => {
                if (err) throw err;
            });
        });
        res.send('Thank you for your note!');
    });

    // API delete request(s)
    // handles a users input if they want to delete a note
    // then will update the json
    app.delete('/api/notes:id', function(req, res) {
        // retrieves id number of note user wants to delete
        const deleteNote = req.params.id;
        console.log(deleteNote);
        fs.readFile('/db/db.json', (err, data) => {
            if (err) throw err;

            dbData = JSON.parse(data);

            for (let i = 0; i < dbData.length; i++) {
                if (dbData[i].id === Number(deleteNote)) {
                    dbData.splice([i], 1);
                }
            }

            console.log(dbData);
            stringData = JSON.stringify(dbData);

            fs.writeFile('/db/db.json', stringData, (err, data) => {
                if (err) throw err;
            });
        });

        // expresses response.status(204)
        res.status(204).send();
    });
};