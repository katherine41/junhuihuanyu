var React = require('react');
var FirstPage = require('./index-components/FirstPage');
var SecondPage = require('./index-components/SecondPage');
// var ThirdPage = require('./index-components/ThirdPage');
var ArticlesPage = require('./index-components/ArticlesPage');
var StudyPage = require('./index-components/StudyPage');
var ContactPage = require('./index-components/ContactPage');


var LandingPage = React.createClass({
	render:function(){
		return (
			<div>
				<FirstPage/>
				<SecondPage/>
				{/*<ThirdPage/>*/}
				<ArticlesPage/>
				<StudyPage/>
				<ContactPage/>
			</div>
		)
	}

});

module.exports = LandingPage;
