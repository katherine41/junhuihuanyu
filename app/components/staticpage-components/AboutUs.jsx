var React = require('react');
var TopBanner = require('../common-components/TopBanner');
var TitleLine = require('../common-components/TitleLine');

import '../../../public/css/staticpages.css';

var AboutUs = React.createClass({
	render: function () {
		return (
			<div>
				<TopBanner bannerName="外汇资产配置，从我们开始"/>
				<div className="staticPageContainer container" id="aboutUsContainer">
					<TitleLine titleNameChn="关于我们" titleNameEng="ABOUT US"/>
					<p>
						骏寰科技有限公司，简称骏寰科技，2018年1月成立于重庆，公司核心团队由曾就职于陆金所、广发证券、阿里巴巴等一流公司的成员组成。依靠深厚的专业背景、严谨的风控意识、强大的产品研发能力，我们致力于为客户提供值得信赖的外汇金融服务。<br/>
						公司致力成为中国最优秀的外汇金融服务商, 旗下包含外汇平台搭建板块、智能EA研发板块、外汇培训板块三大核心业务, 为外汇平台、外汇交易者提供全流程的资金、资产管理服务。<br/>
						在外汇平台云搭建方面，我们提供云服务器搭建管理、数据源及LP接入、专属APP打造、客户管理系统等一站式互联网外汇金融服务；在智能EA研发方面，我们面向机构提供全流程的程序式交易解决方案；在外汇培训方面，提供财经日历、即时新闻资讯、交易策略、学习文库和精品课程等文字类和视频类培训服务。<br/>
					</p>
					<div className="paragraphImg" ><img src="../../image/paragraph/aboutUs.jpg"/></div>
				</div>
			</div>
		)
	}

});

module.exports = AboutUs;