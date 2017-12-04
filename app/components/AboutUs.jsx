var React = require('react');
var TitleLine = require('./TitleLine');

var AboutUs = React.createClass({

    render:function(){
        return (
            <div >
                <div className="contentTop"></div>
                <div className="contentMiddle container">
                    <TitleLine titleNameChn="关于我们" titleNameEng="ABOUT US"/>
                    about us
                </div>
            </div>
        )
    }

});


module.exports = AboutUs;