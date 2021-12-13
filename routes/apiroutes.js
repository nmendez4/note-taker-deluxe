// requirements
const path = require('path');
const fs = require('fs');

module.exports = function(app) {
    // API get request(s)
    // handles when a user visits a page
    app.get('/api/notes', (req, res) => {
        fs.readFile(path.join(__dirname, './db/db.json'), (err, data) => {
            if (err) throw err;
            const notes = json.parse(data);
            res.JSON(notes);
        });
    });

    // API post request(s)
    // handles a users submissions from the page, to send to the server
    app.post('/api/notes', (req, res) => {
        fs.writeFile(path.join(__dirname, './db/db/json'), JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.JSON(notes);
        });
    });
//    // API delete request(s)
//    // handles a users input if they want to delete a note
//    // then will update the json
//     app.delete('/api/notes:id', function(req, res) {
//         // retrieves id number of note user wants to delete
//         const deleteNote = req.params.id;
//         console.log(deleteNote);
//         fs.readFile('/db/db.json', (err, data) => {
//             if (err) throw err;

//             dbData = JSON.parse(data);

//             for (let i = 0; i < dbData.length; i++) {
//                 if (dbData[i].id === Number(deleteNote)) {
//                     dbData.splice([i], 1);
//                 }
//             }

//             console.log(dbData);
//             stringData = JSON.stringify(dbData);

//             fs.writeFile('/db/db.json', stringData, (err, data) => {
//                 if (err) throw err;
//             });
//         });

//         // expresses response.status(204)
//         res.status(204).send();
//     });
};
