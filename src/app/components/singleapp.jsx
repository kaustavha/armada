var React = require('react');
var SingleApp = React.createClass({
  render: function() {
	  var pic = document.createElement("BUTTON");
	  document.body.appendChild(pic);
	  
	  var src= sessionStorage.getItem('src';
	  var count = sessionStorage.getItem('count');
	  
	  for(var i = 0; i < count; i++){
		  if(src.localCompare(i + ".png")){
			  pic.src = src;
		  }
	  }
	  
	  pic.onclick = {this._download}
    return (
      <ul>
        
      </ul>
    )
  },
  _download: function() {
	 window.location = "app.apk"
    
  }
});
module.exports = SingleApp;