var React = require('react');
var TitleLine = require('./TitleLine');

var Training = React.createClass({

	render:function(){
		return (
			<div >
				<div className="contentTop"></div>
				<div className="contentMiddle container">
					<TitleLine titleNameChn="培训" titleNameEng="TRAINING"/>
					Training
				</div>
			</div>
		)
	}

});


module.exports = Training;