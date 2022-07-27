const User = require('./models/user');
const jsdom = require("jsdom");

const express = require('express');
const app = express();

const port = 3000;
const host = '127.0.0.1';

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/views/password_remind.html');
});

app.post('/remind', async (req, res) => {
    console.log(await new User('', '', '', req.body.email).pass_find());
    res.redirect('/');
});

app.use((req, res, next) => {
    res.status(404).send(`Sorry cant find that!`);
});

app.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`);
});