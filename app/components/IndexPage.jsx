var React = require('react');
var {Link} = require('react-router');

var IndexPage = React.createClass({
    componentDidMount(){
    },
    render:function(){
        return (
            <div>
                <div id="indexTop" style={{zIndex:1,backgroundImage:`url("../../image/junhuihuanyuBanner.png")`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src="../../image/title.png"/>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    骏汇寰宇专注于普及外汇理财方式、外汇智能EA云技术服务、外汇市场分析，是一家位于重庆的外汇创业交流平台，我们只做最易懂、最直观、最便捷、最简洁的外汇理财。<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" id="indexTop_container">
                    <div id="indexBlocksContainer">
                        <div id="calendarBlock" className="indexBlocks">
                            <div className="layer">
                                <div className="innerText">
                                    <p><img className="blockLogo" src="../../image/calendarLogo.svg"/>财经日历</p>
                                    <p>ECONOMIC CALENDAR</p>
                                </div>
                            </div>
                        </div>
                        <div id="articleBlock" className="indexBlocks">
                            <div className="layer">
                                <div className="innerText">
                                    <p><img className="blockLogo" src="../../image/articleLogo.svg"/>汇评</p>
                                    <p>ARTICLES</p>
                                </div>
                            </div>
                        </div>
                        <div id="videoBlock" className="indexBlocks">
                            <div className="layer">
                                <div className="innerText">
                                    <p><img className="blockLogo" src="../../image/videoLogo.svg"/>视频解析</p>
                                    <p>VIDEOS</p>
                                </div>
                            </div>
                        </div>
                        <div id="memberBlock" className="indexBlocks">
                            <div className="layer">
                                <div className="innerText">
                                    <p><img className="blockLogo" src="../../image/memberLogo.svg"/>会员</p>
                                    <p>MEMBER</p>
                                </div>
                            </div>
                        </div>
                        <div id="platformBlock" className="indexBlocks">
                            <div className="layer">
                                <div className="innerText">
                                    <p><img className="blockLogo" src="../../image/platformLogo.svg"/>平台</p>
                                    <p>PLATFORM</p>
                                </div>
                            </div>
                        </div>
                        <div id="policyBlock" className="indexBlocks">
                            <div className="layer">
                                <div className="innerText">
                                    <p><img className="blockLogo" src="../../image/policyLogo.svg"/>政策</p>
                                    <p>POLICY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});

module.exports=IndexPage;
