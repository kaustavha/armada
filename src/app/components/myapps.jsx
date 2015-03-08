var React = require('react');
var MyApps = React.createClass({
  render: function() {
	  var x = ["pic1.png", "pic2.png", "pic3.png", "pic4.png", "pic5.png"];
	  var i;
	  for(i = 0; i< x.length;i++){
		  var pic = document.createElement('DIV');
		  document.body.appendChild(pic);
		  pic.src = x[i];
	  }
    return (
      <ul>
       
      </ul>
    )
  }
});
module.exports = MyApps;