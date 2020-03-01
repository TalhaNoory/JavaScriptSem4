"use strict";
// Here we create an instance of the 
const book = { title: "Never Ending story", author: "SpørgDigSelv", published: new Date(Date.UTC(2020, 12, 30)), pages: 312 };
const bookone = { title: "title", author: "author" };
function getIbook(book) {
    console.log(book.title, book.author, book.published, book.pages);
}
getIbook(book);
getIbook(bookone);
class Book {
    constructor(_title, _author, _published, _pages) {
        this._title = _title;
        this._author = _author;
        this._published = _published;
        this._pages = _pages;
    }
    get title() {
        return this._title;
    }
    set title(val) {
        this._title = val;
    }
    get author() {
        return this._author;
    }
    set author(val) {
        this._author = val;
    }
    get published() {
        return this._published;
    }
    set published(val) {
        this._published = val;
    }
    get pages() {
        return this._pages;
    }
    set pages(val) {
        this._pages = val;
    }
}
//# sourceMappingURL=interface.js.map