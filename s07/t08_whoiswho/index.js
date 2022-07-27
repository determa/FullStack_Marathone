let express = require('express');
let multer = require('multer');
let csv = require('csv-parser');
let fs = require('fs');
let app = express();

let port = 3000;
let host = '127.0.0.1';
let page = `<h1>Parsing CSV data</h1>
<form method="post" action="/" enctype="multipart/form-data">
    <label for="file">Upload file: <input type="file" name="file" required></label>
    <button type="submit">Upload</button>
</form>`;

let results = [];

app.use(express.urlencoded({ extended: false }));
app.use(multer({ dest: "uploads" }).single("file"));

app.get('/', (req, res) => {
    res.send(page);
});

app.post('/', (req, res) => {
    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.redirect('/uploaded');
        });
});

app.get('/uploaded', (req, res) => {
    res.send(page + init_table(results, req.query));
});

app.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`);
});

function init_table(arr, filter = false) {
    let map = get_filter(arr);
    let result = '<form action="/uploaded" id="filters"><table border="1px;"><tr><label for="change">Select filters and click here: <button type="submit">APPLY</button></label>';
    for (let key in arr[0]) {
        result += `<th>${get_selector(key, map, filter ? filter[key] : false)}</th>`;
    }
    result += '</tr>';
    if (filter && Object.keys(filter).length !== 0) {
        arr = arr.filter(item => {
            let flag = true;
            for (let key in item) {
                if (!(filter[key] === item[key] || filter[key] === 'all-items')) {
                    flag = false;
                }
            }
            return flag;
        });
    }
    arr.map(item => {
        result += '<tr>';
        for (let key in item) {
            result += `<td>${item[key]}</td>`;
        }
        result += '</tr>';
    });
    result += '</table></form>';
    return result;
}

function get_selector(title, map, filter) {
    let res = `<select name="${title}">${title}`;
    res += `<option value="all-items" ${!filter || filter === 'all-items' ? 'selected' : ''}><b>${title} (all)</b></option>`;
    map.get(title).map(item => {
        res += `<option value="${item}"  ${filter === item ? 'selected' : ''}>${item}</option>`;
    });
    res += `</select>`;
    return res;
}

function get_filter(arr) {
    let map = new Map();
    for (let key in arr[0]) {
        map.set(key, [...new Set(arr.map(item => { return item[key] }))].sort());
    }
    return map;
}