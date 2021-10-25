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
		let tasks;
		if(localStorage.getItem("books") === null){
			tasks = [];
		} else {
			tasks = JSON.parse(localStorage.getItem("tasks"));
		}
		tasks.push(title);
		localStorage.setItem("tasks", JSON.stringify(tasks));
		// log to console that task is added to LS
		title.addedToLS();
	}
}