import React from 'react';

export const Hello = React.createClass({
	render: function(){
		return (
			<div>Welcome, {this.props.name}!</div>
		);
		
	}
});

//export default Hello;