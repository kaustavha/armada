var React = require('react'),
FlatButton = mui.FlatButton;
var AllAps = React.createClass({
  render: function() {
	  var x = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
	  var count = x.length;
	  sessionStorage.setItem('count', count);
	  var i;
	  for(i =0; i < count; i++){
		  var yo = document.createElement("BUTTON");
		  document.body.appendChild(yo);
		  yo.src = x[i];
		  yo.id = i;
		  yo.onclick = function(e) {
			  
			  for(var i = 0; i < count; i++){
				  if(this.src.localCompare(i + ".png")){
					  sessionStorage('src', i + ".png");
				  }
			  }
        	  
	  }
	  
    return (
      <ul>
        
      </ul>
    )
  }
 
});
module.exports = AllAps;