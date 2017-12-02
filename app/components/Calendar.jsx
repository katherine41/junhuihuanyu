/**
 * Created by Katherine on 10/17/17.
 */
import env_variables from '../components/environment.js';

var React = require('react');
var {Link} = require('react-router');
import '../../public/css/style.css';


var Calendar = React.createClass({
    componentDidMount:function () {
    },
    render: function () {
        return (
        <div>
            <div className="contentTop"></div>
            <div className="contentMiddle container">
                <div className="titleLine">
                    <span></span>
                    <h4>财经日历<small>ECONOMIC CALENDAR</small></h4>
                </div>
                <hr/>
                <iframe width="100%" height="600px" frameBorder="0" scrolling="yes" src="https://rili-d.jin10.com/open.php"></iframe>
            </div>
        </div>
        )
    }

});

module.exports = Calendar;