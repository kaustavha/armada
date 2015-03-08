var React = require('react');
var Developer = React.createClass({
  render: function() {
    return (
      <ul>
        <h3 id="DevName" display="none" >Developer Name: Nikhil</h3>
		<FlatButton label="More From Developer" primary={true}  />
		<FlatButton label="Upload" primary={true} onClick={this._upload}  />
      </ul>
    )
  },
  
  _upload: function() {
	  var x = document.createElement("INPUT");
	  x.setAttribute("type", "file");
    
  }
});
module.exports = Developer;