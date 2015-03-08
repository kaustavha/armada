(function () {
  var React = require('react'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    Main = require('./components/main.jsx'); // Our custom react component

  //Needed for React Developer Tools
  window.React = React;

  var author = function () { console.log("author"); };
  var books = function () { console.log("books"); };
  var viewBook = function (bookId) {
    console.log("viewBook: bookId is populated: " + bookId);
  };

  var routes = {
    '/author': author,
    '/books': [books, function() {
      console.log("An inline route handler.");
    }],
    '/books/view/:bookId': viewBook
  };

  var router = Router(routes);

  router.init();

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  // Render the main app react component into the document body.
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  React.render(<Main />, document.body);

})();