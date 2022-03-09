const normal = require('./normal-router');
const quantum = require('./quantum-router');

const express = require('express');
const app = express();

const options = {
    host: '127.0.0.1',
    port: 8000
};

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    return res.render('index');
});

app.get("/normal", (req, res) => {
    return res.render('normal', {
        time: normal.calculateTime()
    });
});

app.get("/quantium", (req, res) => {
    return res.render('quantum', {
        time: quantum.calculateTime()
    });
});

app.listen(options.port, options.host, () => {
    console.log(`Server is running on http://${options.host}:${options.port}`);
});