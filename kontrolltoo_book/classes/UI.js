class UI{
	// help function to add DOM element
	addUIelement(elementname, classname = "", textcontent = "", atributes={}){
		const element = document.createElement(elementname);
		element.className = classname;
		element.appendChild(document.createTextNode(textcontent));
		// if we want to use atributes for example a atribute is href with value #
		if(Object.keys(atributes).length > 0){
			for(let key in atributes){
				element.setAttribute(key, atributes[key]);
			}
		}
		return element;
	}

	addBook(title, author, isbn) {
		// create list item
		const tr = this.addUIelement("tr")
		const thTitle = this.addUIelement("th", "collection-item", title.name);
		const thAuthor = this.addUIelement("th", "collection-item", author.name);
		const thISBN = this.addUIelement("th", "collection-item", isbn.name);

		// create X
		const thEmpty = this.addUIelement("th");
		const link = this.addUIelement("a", "secondary-element", "X", {"href":"#"});
		thEmpty.appendChild(link);

		// merge th's together
		tr.appendChild(thTitle);

		// find table to add created list item
		const table = document.querySelector("tbody");
		table.appendChild(tr);

		// find input to clear this value
		//const input = document.querySelector("#title");
		//input.value = "";

		// log to console taht title is added to UI
		//title.addedToUI(); 
	}

}