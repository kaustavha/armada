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
$(document).ready(function() {
    var vm = new ListViewModel();
    $.material.init();
    pager.extendWithPage(vm);
    // Activates knockout.js
    ko.applyBindings(vm);
    pager.start();
    pager.navigate('#/marketing');
});
