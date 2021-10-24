// UI and LS objects
ui = new UI();
ls = new LS();

// event elements
//from submit event
const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");

// events
// form submit event
form.addEventListener("submit", addBook);



function addBook(e) {
    // create a new object Book with input value
    const title = new Book(titleInput.value)
    const author = new Book(authorInput.value)
    const isbn = new Book(isbnInput.value)

	// add book value to visual by UI object
	ui.addBook(title, author, isbn);

	// add book to LS by LS object
	//ls.addBook(title, author, isbn);
	
	e.preventDefault();
}
