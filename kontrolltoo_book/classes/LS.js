class LS{
	getData(name) {
		let data;
		if(localStorage.getItem(name) === null){
			data = []
		} else {
			data = JSON.parse(localStorage.getItem(name));
		}
		return data;
	}

	setData(name, data) {
		localStorage.setItem(name, JSON.stringify(data));
	}

	// add book to LS
	addBook(title, author, isbn) {

		// add title
		// set data to the LS
		let titles;
		if(localStorage.getItem("titles") === null){
			titles = [];
		} else {
			titles = JSON.parse(localStorage.getItem("titles"));
		}
		titles.push(title);
		localStorage.setItem("titles", JSON.stringify(titles));
		// log to console that title is added to LS
		title.addedToLS();

		// add author
		// set data to the LS
		let authors;
		if(localStorage.getItem("authors") === null){
			authors = [];
		} else {
			authors = JSON.parse(localStorage.getItem("authors"));
		}
		authors.push(author);
		localStorage.setItem("authors", JSON.stringify(authors));
		// log to console that author is added to LS
		author.addedToLS();

		// add isbn
		// set data to the LS
		let isbns;
		if(localStorage.getItem("isbns") === null){
			isbns = [];
		} else {
			isbns = JSON.parse(localStorage.getItem("isbns"));
		}
		isbns.push(isbn);
		localStorage.setItem("isbns", JSON.stringify(isbns));
		// log to console that isbn is added to LS
		isbn.addedToLS();
	}
}