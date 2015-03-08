/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
  mui = require('material-ui'),
  Nav = require('./nav.jsx'),
  RaisedButton = mui.RaisedButton,
  /*Toolbar - mui.Toolbar;
  ToolbarGroup = mui.ToolbarGroup;
  DropDownMenu = mui.DropDownMenu;
  FontIcon = mui.FontIcon;
  DropDownIcon = mui.DropDownIcon;*/
  Toolbar = mui.Toolbar,
  ToolbarGroup = mui.ToolbarGroup,
  DropDownMenu = mui.DropDownMenu,
  FontIcon = mui.FontIcon,
  DropDownIcon = mui.DropDownIcon,
  FlatButton = mui.FlatButton;
  

var Main = React.createClass({


  render: function() {
	  
	  var filterOptions = [
	    { payload: '1', text: 'Extras' },

	    
	  ];
	  var iconMenuItems = [
	    { payload: '1', text: 'Download' },
	    { payload: '2', text: 'More Info' }
	  ];

    return (
      <div className="example-page">
	
	
		
<Toolbar >
  <ToolbarGroup key={0} float="left">
    <DropDownMenu menuItems={filterOptions} />
	<FlatButton label="All Apps" primary={true} />
	<FlatButton label="My Apps" secondary={true}  />
	<FlatButton label="Favorites" primary={true}   />
	<FlatButton label="Share" secondary={true} />
  </ToolbarGroup>
  <ToolbarGroup key={1} float="right">

    <FontIcon className="mui-icon-pie" />
    <FontIcon className="mui-icon-sort" />
    <DropDownIcon iconClassName="icon-navigation-expand-more" menuItems={iconMenuItems} />
    <span className="mui-toolbar-separator">&nbsp;</span>
    <RaisedButton label="Developer" primary={true} onClick={this._onDevClick} />
  </ToolbarGroup>
</Toolbar>
       
		
        <Nav/>
		<h3 id="DevName" >Developer Name: Nikhil</h3>
		<FlatButton label="Apps Developed" primary={true}   />
		
      </div>
    );
  },

  _onDevClick: function() {
    
    
  }
 
});

module.exports = Main;