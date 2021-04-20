let myLibrary = [];             //an array of book objects

function Book(title, author, pages, read){                //Book object constructor function
    this.title = title;
    this.author = author;
    this.numPages = pages;
    this.read = read;
    this.displayString = function(){
        //return `Title: ${this.title}, Author: ${this.author}, Number of Pages: ${this.numPages}, Read: ${this.read?"Yes":"No"}`;
        return `<h2>Title: ${this.title}</h2><h3>Author: ${this.author}</h3><h4>Pages: ${this.numPages}</h4><h5>Read? ${this.read?"Yes":"No"}</h5>`;
    }
}

function addBookToLibrary(bookObj){    //function that will take the user's input and add a book to my library array
    myLibrary.push(bookObj);
}

function displayLibrary(){
    let libraryDisplay = document.querySelector(".library-display");
    myLibrary.forEach(element => {
        let book = document.createElement("li");
        book.style.cssText = "color: blue; border: 1px solid green; list-style-type: none;"+
                                "display: flex; flex-direction: column; align-items:center;"+
                                "justify-content: space-between; width:20%; margin:10px; height: 150px;"
        //book.innerText = element.displayString();
        book.innerHTML = element.displayString();
        libraryDisplay.appendChild(book);
    });
}




let book1 = new Book("hello world", "Me", 24, true);
let book2 = new Book("testing", "you", 35, false);
let book3 = new Book("Still Testing", "Him", 234, true);
let book4 = new Book("hello world", "Me", 24, true);
let book5 = new Book("testing", "you", 35, false);
let book6 = new Book("Still Testing", "Him", 234, true);
let book7 = new Book("hello world", "Me", 24, true);
let book8 = new Book("testing", "you", 35, false);
let book9 = new Book("Still Testing", "Him", 234, true);
let book10 = new Book("hello world", "Me", 24, true);
let book11 = new Book("testing", "you", 35, false);
let book12 = new Book("Still Testing", "Him", 234, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);
addBookToLibrary(book7);
addBookToLibrary(book8);
addBookToLibrary(book9);
addBookToLibrary(book10);
addBookToLibrary(book11);
addBookToLibrary(book12);

displayLibrary();