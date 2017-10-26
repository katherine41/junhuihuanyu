var React = require('react');
import '../../public/css/style.css';

var IndexPage = React.createClass({

    render:function(){
        return (
            <div className="indexTop_container">
                <div id="indexTop" style={{backgroundImage:`url("../../image/chongqing-min.jpg")`}}>
                    {/*<img src="../../image/star.jpg"/>*/}
                    <div className="caption">
                        {/*<h1>骏汇寰宇</h1>*/}
                        {/*<h4>外汇创业交流平台</h4>*/}
                        <img src="../../image/title.png"/>

                    </div>

                </div>
                {/*<div id="indexBottom"></div>*/}
            </div>
        )
    }

});


module.exports = IndexPage;
