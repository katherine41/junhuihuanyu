var React = require('react');

var TitleLine = React.createClass({
    render:function(){
        return (
            <div>
                <div className="titleLine">
                    <span></span>
                    <h4>{this.props.titleNameChn}
                        <small>{this.props.titleNameEng}</small>
                    </h4>
                </div>
                <hr/>
            </div>
        )
    }

});

module.exports = TitleLine;