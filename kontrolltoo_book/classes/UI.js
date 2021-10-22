class UI{
	addTitle(title) {
		// create list item
		const li = this.addUIelement("li", "collection-item", title.name);
		// create link
		const link = this.addUIelement("a", "secondary-element", "X", {"href":"#"});
		// add link to list item
		li.appendChild(link);
		// find list to add created list item
		const list = document.querySelector("ul");
		list.appendChild(li);
		// find input to clear this value
		const input = document.querySelector("#title");
		input.value = "";
		// log to console taht title is added to UI
		title.addedToUI(); 
	}

}