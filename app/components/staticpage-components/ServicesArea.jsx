var React = require('react');
var TopBanner = require('../common-components/TopBanner');

import '../../../public/css/staticpages.css';

var ServicesArea = React.createClass({
	render: function () {
		return (
			<div>
				<TopBanner bannerName="外汇金融一站式服务"/>
				<div className="staticPageContainer container" id="servicesContainer">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h2 className="section-heading text-uppercase">精准服务</h2>
							<h3 className="section-subheading text-muted">外汇行业各品类海量资讯</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-6 col-md-4">
							<div className="thumbnail">
								<div className="serviceTopMargin"></div>
								<img src="../../image/icons/service1.svg"/>
								<div className="caption">
									<h4>私人客户推荐</h4>
									<hr/>
									<p>
										通过我们的定制金融解决方案，私人客户、企业和机构均可受益于我们的金融科技专长。我们推荐客户在瑞士瑞讯银行进行外汇交易，瑞讯有3种备受赞誉的交易平台可供选择，这些融合瑞讯卓越流动性和执行的平台可实现其它经纪商无法提供的高级策略和订单类型。</p>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4">
							<div className="thumbnail">
								<div className="serviceTopMargin"></div>
								<img src="../../image/icons/product.svg"/>
								<div className="caption">
									<h4>介绍骏寰科技产品</h4>
									<hr/>
									<p>
										推广骏寰科技产品，我们提供极具吸引力的定制酬金方案、高级客户追踪系统(合作伙伴链接)、自动佣金报告、​快速在线开户处理、品种丰富、交易条件极具竞争力的金融产品、强大且用户友好的交易平台、全天提供独家市场研究、专职多语种客户支持团队。</p>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4">
							<div className="thumbnail">
								<div className="serviceTopMargin"></div>
								<img src="../../image/icons/service3.svg"/>
								<div className="caption">
									<h4>专业外汇培训</h4>
									<hr/>
									<p>依托大数据分析和云计算技术，我们提供财经日历、即时新闻资讯、交易策略、学习文库和精品课程等文字类和视频类培训服务。</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

});

module.exports = ServicesArea;