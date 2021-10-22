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
form.addEventListener("click", addBook);



function addBook(e) {
	// create new object Book with input value
	const title = new Book(titleInput.value);
	const author = new Book(authorInput.value);
	const isbn = new Book(isbnInput.value);

	// add book value to visual by UI object
	ui.addTitle(title);
	ui.addAuthor(author);
	ui.addISBN(isbn);

	// add book to LS by LS object
	ls.addTitle(title);
	ls.addAuthor(author);
	ls.addISBN(isbn);

	e.preventDefault();
}
