let express = require('express');
let crypto = require('crypto-js');
let axios = require('axios');
let app = express();

let port = 3000;
let host = '127.0.0.1';

let pub_key = '1df79f289b0586c1b516e42dbe20970b';
let priv_key = 'c85a78156b086de7dbc9302b7dad998c16cd71dd';

app.use(express.urlencoded({ extended: false }));

obj_to_HTML = (data) => {
    let res = '';
    for (let key in data) {
        if (typeof data[key] === "object") {
            res += `<div class="box"><b class="key">${key}</b>: ${obj_to_HTML(data[key])}</div>`;
        } else {
            res += `<div class="box"><b>${key}</b>: ${data[key]}</div>`;
        }
    }
    return res;
}

app.get('/', (req, res) => {
    let time = Date.now();
    let hash = crypto.MD5(time + priv_key + pub_key);
    axios.get(`http://gateway.marvel.com/v1/public/comics?apikey=${pub_key}&hash=${hash}&ts=${time}`)
        .then(response => {
            res.send(`<style>.box {
                padding: 10px;
                background-color: rgba(128, 128, 128, .5);
                border: 1px solid lightblue;
                width: 100%;
            }
            .box .box {
                width: auto;
            }
            .key {
                color: #9f000e;
            }</style>
            <h1>Comics from Marvel API</h1>` + obj_to_HTML(response.data));
        })
        .catch(error => {
            console.log(error);
        })
});

app.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`);
});