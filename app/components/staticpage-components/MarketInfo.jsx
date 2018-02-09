var React = require('react');
var TopBanner = require('../common-components/TopBanner');

import '../../../public/css/staticpages.css';
var subtitleName = "汇聚金融投资行业最快、最准、最全的数据和资讯，为广大金融投资者提供第一手的财经数据、国际动态、市场观察，我们立志成为业内最实用、最便捷的财经信息服务机构。";
var MarketInfo = React.createClass({
	render: function () {
		return (
			<div>
				<TopBanner bannerName="汇市资讯" subtitleName={subtitleName}/>
				<div className="staticPageContainer container" id="marketInfoContainer">
					aaa
				</div>
			</div>
		)
	}

});

module.exports = MarketInfo;