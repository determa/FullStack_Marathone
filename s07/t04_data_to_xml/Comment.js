module.exports = class Comment {
    object_date;
    comment;
    constructor() {
        this.object_date = new Date().toLocaleDateString();
        this.comment = 'Good comment';
    }
}