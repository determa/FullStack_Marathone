let express = require('express');
let request = require('request');
let sharp = require('sharp');
let fs = require('fs');
let app = express();

let port = 3000;
let host = '127.0.0.1';

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
sharp.cache(false);

app.get('/', (req, res) => {
    res.send(`<style>
    body {
        text-align: center;
    }
    form {
        display: block;
        justify-content: center;
    }
</style>
<body>
    <h1>Make square image</h1>
    <form action="/" method="post">
        <input type="url" name="url" placeholder="Image url..." required>
        <div><button type="submit">GO</button></div>
    </form>
</body>
<div>
    <img src="http://127.0.0.1:3000/image1.png" alt="">
    <img src="http://127.0.0.1:3000/image2.png" alt="">
</div>
<div>
    <img src="http://127.0.0.1:3000/image3.png" alt="">
    <img src="http://127.0.0.1:3000/image4.png" alt="">
</div>`);
});

app.post('/', (req, res) => {
    request(req.body.url).pipe(fs.createWriteStream('./image0.png')).on("close", () => {
        sharp('./image0.png').resize(250, 250).toFile('./image1.png').then(() => {
            sharp('./image1.png').tint({ r: 250, g: 0, b: 0 }).toFile('./image2.png').then(() => {
                sharp('./image1.png').tint({ r: 0, g: 250, b: 0 }).toFile('./image3.png').then(() => {
                    sharp('./image1.png').tint({ r: 0, g: 0, b: 250 }).toFile('./image4.png').then(() => {
                        res.redirect('/');
                    });
                });
            })
        });
    });
});

app.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`);
});