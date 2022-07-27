let express = require('express');
let List = require('./ListAvengerQuotes');
let app = express();

let port = 3000;
let host = '127.0.0.1';

let list = new List();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    list.toXML();
    res.send(`<html lang="en">
    <h1>Data to XML</h1>
        ${list.get_data()}
    </fieldset>
    <fieldset>
        <legend>After convertation</legend>
        ${list.fromXML()}
    </fieldset>
    </html>`)
});

app.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`);
});