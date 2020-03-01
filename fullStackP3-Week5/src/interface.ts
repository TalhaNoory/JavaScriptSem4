interface IBook {
    title: string;
    author: string;
    published?: Date;
    pages?: number;
}

// Here we create an instance of the 
const book = {title:"Never Ending story", author:"SpørgDigSelv", published: new Date(Date.UTC(2020,12,30)), pages: 312};
const bookone = {title: "title", author: "author"};

function getIbook(book: IBook) {
    console.log(book.title, book.author, book.published, book.pages)
}

getIbook(book);
getIbook(bookone);

class Book implements IBook {
    constructor(
      private _title: string,
      private _author: string,
      private _published: Date,
      private _pages: number
    ) {}
    get title() {
      return this._title;
    }
    set title(val: string) {
      this._title = val;
    }
  
    get author() {
      return this._author;
    }
    set author(val: string) {
      this._author = val;
    }
    get published() {
      return this._published;
    }
    set published(val: Date) {
      this._published = val;
    }
    get pages() {
      return this._pages;
    }
    set pages(val: number) {
      this._pages = val;
    }
  }

