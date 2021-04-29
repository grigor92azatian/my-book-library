let bookObjArray = [];             //an array of book objects
let libraryUl = document.querySelector(".libraryDisplay");

function Book(title, author, pages, read){                //Book object constructor function
    this.title = title;
    this.author = author;
    this.numPages = pages;
    this.read = read;
    // this.displayString = function(){
    //     //return `Title: ${this.title}, Author: ${this.author}, Number of Pages: ${this.numPages}, Read: ${this.read?"Yes":"No"}`;
    //     return `<h2>Title: ${this.title}</h2><h3>Author: ${this.author}</h3><h4>Pages: ${this.numPages}</h4><h5>Read? ${this.read?"Yes":"No"}</h5>`;
    // }
}

//take user input, make a book object, add book object to obj array

function getUserInput(){    //function that takes user's input and returns a new book object
    let bookTitle = document.querySelector("#bookTitle").value;
    let bookAuthor = document.querySelector("#bookAuthor").value;
    let bookPages = document.querySelector("#bookPages").value;
    let readStatus;
    if(document.querySelector("#true").checked==true){
        readStatus = true;
    }else if(document.querySelector("#false").checked==true){
        readStatus = false;
    }
    return new Book(bookTitle,bookAuthor,bookPages,readStatus);
}

function addBookToLibrary(bookObj){    //assigns user's input to newBook variable and then adds that newBook to object array
    bookObjArray.push(bookObj);
    console.log(bookObjArray);
}
function removeBookFromLibrary(index){
    bookObjArray.splice(index,1);
}

function displayBookToPage(bookObj){   //
    //create new li element
    let newLi = document.createElement("li");
    newLi.setAttribute("id",bookObj.title.split(" ").join("").toString());
    newLi.innerHTML = `
        <span>${bookObj.title}</span>
        <span>${bookObj.author}</span>
        <span>${bookObj.numPages}</span>
        <span>${bookObj.read?"Yes":"No"}</span>
        <button id="delete${bookObj.title.split(' ').join('').toString()}">Delete</button>
        `;
    //append new li to ul on page
    libraryUl.appendChild(newLi);
    //add event listener to delete button
    document.querySelector(`#delete${bookObj.title.split(' ').join('').toString()}`).addEventListener("click",function(){
        console.log("delete button works");
        document.querySelector(`#${bookObj.title.split(" ").join("").toString()}`).parentNode.removeChild(document.querySelector(`#${bookObj.title.split(" ").join("").toString()}`));
        let removeIndex = bookObjArray.findIndex(function(book){
            return book.title === bookObj.title;
        });
        removeBookFromLibrary(removeIndex);
    });
}

let addBookButton = document.querySelector("#addBook");
let bookForm = document.querySelector("#newBookForm");
// addBookButton.addEventListener("click",function(){
//     let newBook = getUserInput();
//     addBookToLibrary(newBook);
//     displayBookToPage(newBook);
// });

addBookButton.addEventListener("click", function(event){
    event.preventDefault();
    let newBook = getUserInput();
    addBookToLibrary(newBook);
    displayBookToPage(newBook);
    bookForm.reset();
});






































// function displayLibrary(){              //use this to add initial set of books to library
//     let libraryDisplay = document.querySelector(".library-display");
//     myLibrary.forEach(element => {
//         let book = document.createElement("li");
//         book.style.cssText = "color: black; list-style-type: none;"+
//                                 "display: flex; flex-direction: column; align-items:center;"+
//                                 "justify-content: space-between; width:20%; margin:10px; height: 150px;"+
//                                 "background-image:url('https://cdn4.iconfinder.com/data/icons/small-n-flat/24/book-512.png');"+
//                                 "background-size:200px 150px;"
//         //book.innerText = element.displayString();
//         book.innerHTML = element.displayString();
//         libraryDisplay.appendChild(book);
//     });
// }

// function addOneBook(){              //use this to add additional (user input) books to library

// }






// function addNewBookToLibrary(){         //get info for new book with this
//     let title = prompt("Title?");
//     let author = prompt("Author?");
//     let pages = prompt("How many pages?");
//     let read = prompt("Have you read this book?");
//     let newBook = new Book(title, author, pages, read);
//     myLibrary.push(newBook);
//     displayLibrary();
// }



