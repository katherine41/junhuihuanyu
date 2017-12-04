/**
 * Created by Katherine on 10/17/17.
 */
import env_variables from '../components/environment.js';

var React = require('react');
var {Link} = require('react-router');
var TitleLine = require('./TitleLine');


var Calendar = React.createClass({
    componentDidMount:function () {
    },
    render: function () {
        return (
        <div>
            <div className="contentTop"></div>
            <div className="contentMiddle container">
                <TitleLine titleNameChn="财经日历" titleNameEng="ECONOMIC CALENDAR"/>
                <iframe width="100%" height="600px" frameBorder="0" scrolling="yes" src="https://rili-d.jin10.com/open.php"></iframe>
            </div>
        </div>
        )
    }

});

module.exports = Calendar;