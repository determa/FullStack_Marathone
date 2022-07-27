let Comment = require('./Comment.js');
let Avenger = require('./AvengerQuote');
let fs = require('fs');
let xml2js = require('xml2js');

let data = [
    { id: 1, author: 'Chuck', quote: 'THE MARVEL HEROES HERO', photo: ['https://i.imgflip.com/201ppv.jpg', 'https://i.imgflip.com/201ppv.jpg'], date: new Date, comments: new Comment },
    { id: 2, author: 'Chuck', quote: 'THE MARVEL HEROES HERO', photo: ['https://i.imgflip.com/201ppv.jpg', 'https://i.imgflip.com/201ppv.jpg'], date: new Date, comments: new Comment },
    { id: 3, author: 'Chuck', quote: 'THE MARVEL HEROES HERO', photo: ['https://i.imgflip.com/201ppv.jpg', 'https://i.imgflip.com/201ppv.jpg'], date: new Date, comments: new Comment },
    { id: 4, author: 'Chuck', quote: 'THE MARVEL HEROES HERO', photo: ['https://i.imgflip.com/201ppv.jpg', 'https://i.imgflip.com/201ppv.jpg'], date: new Date, comments: new Comment }
];

module.exports = class ListAvengerQuotes {
    list = [];
    constructor() {
        for (let value of data) {
            this.list.push(new Avenger(value));
        }
    }

    get_data() {
        let str = '<fieldset><legend>Before convertation</legend>';
        for (let value of this.list) {
            str = str + `<div><span>Id: ${value.id}, author: ${value.author}, quote: ${value.quote}, <img src="${value.photo[0]}" alt="ok" width="100" height="100"/>, comment date: ${value.comments.object_date}, comment: ${value.comments.comment}</span></div>`;
        }
        return str + '</fieldset>';
    }

    toXML() {
        let builder = new xml2js.Builder;
        fs.writeFileSync('avenger_quote.xml', builder.buildObject(this.get_data()), (err) => {
            if (err) throw err;
        });
    }

    fromXML() {
        return fs.readFileSync('avenger_quote.xml', 'utf-8');
    }
}