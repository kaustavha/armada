function ListViewModel() {
	var self = this;

	self.applications = [
	{ name: "Twitter", description: "Tweet me!" },
	{ name: "Facebook", description: "The book of faces" },
	{ name: "Snapchat", description: "For funny pics and... stuff" }
	];
}

function Application(name, description) {
	var self = this;
    self.name = name;
    this.description = description;
}

// Activates knockout.js
ko.applyBindings(new ListViewModel());