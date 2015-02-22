function ListViewModel() {
    var self = this;

    self.applications = [
    { name: "PopcornTime", description: "Netflix for pirates!"},
    { name: "armada", description: "Cross platform app store"},
    { name: "Snapchat", description: "For funny pics and... stuff"}
    ];
}

function Application(name, description, link) {
    var self = this;
    self.name = name;
    this.description = description;
}

$(document).ready(function() {
    $.material.init();
    // Activates knockout.js
    ko.applyBindings(new ListViewModel());
});