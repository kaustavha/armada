var React = require('react'),
    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton;
var Nav = React.createClass({
  render: function() {
    return (
      <div className="nav-button-container">
        <RaisedButton linkButton={true} href="#/store" secondary={true} label='App Store' />
        <RaisedButton linkButton={true} href="#/myapps" secondary={true} label='My Apps' />
        <RaisedButton linkButton={true} href="#/developer" secondary={true} label='Developer Tools' />
      </div>
    )
  }
});
module.exports = Nav;
