var React = require('react');

var FirstPage = React.createClass({
	render: function () {
		return (
			<section id="services">
				<div className="container">
					<div className="row text-center">
						<div className="col-md-4">
							<div className="service-icons-wrapper">
								<div className="service-icons">
									<img src="../../image/icons/15.png"/>
								</div>
							</div>
							<hr/>
							<h4 className="service-heading">货币短线交易</h4>
							<p className="text-muted">非常适合每天的日常交易，外汇越来越受到散户投资者和机构者的偏爱</p>
						</div>
						<div className="col-md-4">
							<div className="service-icons-wrapper">

								<div className="service-icons">
									<img src="../../image/icons/training.svg"/>
								</div>
							</div>
							<hr/>
							<h4 className="service-heading">外汇学习</h4>
							<p className="text-muted">我们的视频、电子书和网络讲座将为您传授成功交易者的策略和最佳操作</p>
						</div>
						<div className="col-md-4">
							<div className="service-icons-wrapper">
								<div className="service-icons">
									<img src="../../image/icons/98.png"/>
								</div>
							</div>
							<hr/>
							<h4 className="service-heading">EA产品</h4>
							<p className="text-muted">通过云计算和大数据分析，得出用户最需要的程式化交易EA设计</p>
						</div>
					</div>
				</div>
			</section>
		)
	}

});

module.exports = FirstPage;