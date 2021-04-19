let myLibrary = [];             //an array of book objects

function Book(title, author, pages){                //Book object constructor function
    this.title = title;
    this.author = author;
    this.numPages = pages;
    this.displayString = function(){
        return `Title: ${this.title}, Author: ${this.author}, Number of Pages: ${this.numPages}`;
    }
}

function addBookToLibrary(bookObj){    //function that will take the user's input and add a book to my library array
    myLibrary.push(bookObj);
}

function displayLibrary(){
    let libraryDisplay = document.querySelector(".library-display");
    myLibrary.forEach(element => {
        let book = document.createElement("li");
        book.innerText = element.displayString();
        libraryDisplay.appendChild(book);
    });
}




let book1 = new Book("hello world", "Me", 24);
let book2 = new Book("testing", "you", 35);
let book3 = new Book("Still Testing", "Him", 234);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayLibrary();