/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
  mui = require('material-ui'),
  Nav = require('./nav.jsx');

var Main = React.createClass({
  render: function() {
    return (
      <div class='container'>
        <Nav />
      </div>
    );
  }});

module.exports = Main;