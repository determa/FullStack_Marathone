let express = require('express');
let request = require('request');
let cheerio = require('cheerio');
let app = express();

let port = 3000;
let host = '127.0.0.1';

let page = `<h1>Show other sites</h1>
<form method="post" action="/code">
    <input type="url" name="url" placeholder="URL" required>
    <button type="submit">go</button>
</form>`;

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(page);
});

app.post('/code', (req, res) => {
    request(req.body.url, (err, response, body) => {
        if (err) throw err;
        let $ = cheerio.load(body);
        let str = $('div').html().replace(/</g, '&lt;').replace(/>/g, '&gt').replace(/>/g, '&gt');
        res.send(page + `<hr><pre>${str}</pre>`);
    })
})

app.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`);
});