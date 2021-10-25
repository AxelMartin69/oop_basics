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
		const thTitle = this.addUIelement("th", "collection-item", title.name);
		const thAuthor = this.addUIelement("th", "collection-item", author.name);
		const thISBN = this.addUIelement("th", "collection-item", isbn.name);

		// create X
		const thEmpty = this.addUIelement("th");
		const link = this.addUIelement("a", "secondary-element", "X", {"href":"#"});
		thEmpty.appendChild(link);

		// merge th's together
        const tr = this.addUIelement("tr")
		tr.appendChild(thTitle);
        tr.appendChild(thAuthor);
        tr.appendChild(thISBN);
        tr.appendChild(link);

		// find table to add created list item
		const table = document.querySelector("tbody");
		table.appendChild(tr);

		// find input to clear this value
		const input1 = document.querySelector("#title");
		input1.value = "";
        const input2 = document.querySelector("#author");
		input2.value = "";
        const input3 = document.querySelector("#isbn");
		input3.value = "";

		// log to console taht title is added to UI
		//title.addedToUI(); 
	}

	deleteBook(book){
		const deleteIcon = book.nextSibling;
		if(deleteIcon.textContent == "X"){
			if(confirm("U sure??")){
				book.parentElement.remove();
			}
		}
	}

}