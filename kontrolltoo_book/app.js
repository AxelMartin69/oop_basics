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

	// add book value to visual by UI object
	ui.addBook(titleInput, authorInput, isbnInput);

	// add book to LS by LS object
	//ls.addBook(title, author, isbn);
	
	e.preventDefault();
}
