let express = require('express');
let cookie = require('cookie-session');
let app = express();

let port = 3000;
let host = '127.0.0.1';

app.use(express.urlencoded({ extended: false }));

app.use(cookie({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 24 * 60 * 60 * 1000
}))

app.get('/', (req, res) => {
    req.session.views = (req.session.views || 0) + 1;
    res.send(`<h1>Cookie counter</h1><p>This page was loaded ${req.session.views} time(s) in last minute`);
});

app.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`);
});