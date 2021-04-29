let bookObjArray = [];             //an array of book objects
let libraryUl = document.querySelector(".libraryDisplay");

function Book(title, author, pages, read){                //Book object constructor function
    this.title = title;
    this.author = author;
    this.numPages = pages;
    this.read = read;
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
    if(isNaN(bookPages)){
        alert("Please enter a number for 'Number of Pages'");
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
    let bookTitleID = bookObj.title.split("").filter(function(char){
    if(/[a-zA-Z0-9]/.test(char)){
        return char;
    }
    }).join("");
    let newLi = document.createElement("li");
    newLi.setAttribute("id","book"+bookTitleID);
    newLi.innerHTML = `
        <span>${bookObj.title}</span>
        <span>${bookObj.author}</span>
        <span>${bookObj.numPages}</span>
        <span id="readStatus${bookTitleID}">${bookObj.read?"Yes":"No"}</span>
        <span>
            <button id="delete${bookTitleID}">Delete</button>
            <button id="changeReadOf${bookTitleID}">Read Status</button>
        </span>
        `;
    //append new li to ul on page
    libraryUl.appendChild(newLi);
    //add event listener to delete button
    document.querySelector(`#delete${bookTitleID}`).addEventListener("click",function(){
        console.log("delete button works");
        document.querySelector(`#book${bookTitleID}`).parentNode.removeChild(document.querySelector(`#book${bookTitleID}`));
        let removeIndex = bookObjArray.findIndex(function(book){
            return book.title === bookObj.title;
        });
        removeBookFromLibrary(removeIndex);
    });
    //add event listener to read status button
    document.querySelector(`#changeReadOf${bookTitleID}`).addEventListener("click",function(){
        let bookIndex = bookObjArray.findIndex(function(book){
            return book.title === bookObj.title;
        });
        if(document.querySelector(`#readStatus${bookTitleID}`).textContent === "Yes"){
            document.querySelector(`#readStatus${bookTitleID}`).textContent = "No";
            bookObjArray[bookIndex].read = false;
        }else{
            document.querySelector(`#readStatus${bookTitleID}`).textContent = "Yes";
            bookObjArray[bookIndex].read = true;
        }
    });
}

let addBookButton = document.querySelector("#addBook");
let bookForm = document.querySelector("#newBookForm");

addBookButton.addEventListener("click", function(event){
    event.preventDefault();
    let newBook = getUserInput();
    addBookToLibrary(newBook);
    displayBookToPage(newBook);
    bookForm.reset();
});
