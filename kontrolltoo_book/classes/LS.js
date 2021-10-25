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
		// set data to the LS
		let titles;
		if(localStorage.getItem("titles") === null){
			titles = [];
		} else {
			titles = JSON.parse(localStorage.getItem("titles"));
		}
		titles.push(title);
		localStorage.setItem("titles", JSON.stringify(titles));
		// log to console that task is added to LS
		title.addedToLS();
	}
}