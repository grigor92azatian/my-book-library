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
function addNewBookToLibrary(){         //get info for new book with this
    let title = prompt("Title?");
    let author = prompt("Author?");
    let pages = prompt("How many pages?");
    let read = prompt("Have you read this book?");
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayLibrary();
}
function displayLibrary(){              //use this to add initial set of books to library
    let libraryDisplay = document.querySelector(".library-display");
    myLibrary.forEach(element => {
        let book = document.createElement("li");
        book.style.cssText = "color: black; list-style-type: none;"+
                                "display: flex; flex-direction: column; align-items:center;"+
                                "justify-content: space-between; width:20%; margin:10px; height: 150px;"+
                                "background-image:url('https://cdn4.iconfinder.com/data/icons/small-n-flat/24/book-512.png');"+
                                "background-size:200px 150px;"
        //book.innerText = element.displayString();
        book.innerHTML = element.displayString();
        libraryDisplay.appendChild(book);
    });
}

function addOneBook(){              //use this to add additional (user input) books to library

}

function getBookInfo(){
    let bookTitle = document.querySelector("#book-title").value;
    let bookAuthor = document.querySelector("#book-author").value;
    let bookPages = document.querySelector("#book-pages").value;
    let readStatus;
    if(document.querySelector("#true").checked==true){
        readStatus = true;
    }else if(document.querySelector("#false").checked==true){
        readStatus = false;
    }
    console.log(readStatus);
    let book = new Book(bookTitle,bookAuthor,bookPages,readStatus);
    addBookToLibrary(book);
    displayLibrary();
}

let addBookButton = document.querySelector("#add-book");
addBookButton.addEventListener("click",getBookInfo);


// let book1 = new Book("hello world", "Me", 24, true);
// let book2 = new Book("testing", "you", 35, false);
// let book3 = new Book("Still Testing", "Him", 234, true);
// let book4 = new Book("hello world", "Me", 24, true);
// let book5 = new Book("testing", "you", 35, false);
// let book6 = new Book("Still Testing", "Him", 234, true);
// let book7 = new Book("hello world", "Me", 24, true);
// let book8 = new Book("testing", "you", 35, false);
// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);
// addBookToLibrary(book4);
// addBookToLibrary(book5);
// addBookToLibrary(book6);
// addBookToLibrary(book7);
// addBookToLibrary(book8);




