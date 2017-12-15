var React = require('react');
var {Link} = require('react-router');
import env_variables from '../components/environment.js';


var PopupPanel = React.createClass({

    render:function(){
        return (
        <div className="popupContainer modal" id="cateMgtModal">
            <div className="modal-content">
                <span className="pull-right closeModalBtn">x</span>
                <h4>添加成功！</h4>
                <button type="button" className="blockBtn">
                    查看所有文章
                </button>
                <button type="button" className="blockBtn">
                    继续添加
                </button>
            </div>
        </div>
        )
    }

});


module.exports = PopupPanel;
