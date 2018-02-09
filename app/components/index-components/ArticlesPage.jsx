var React = require('react');

var ArticlesPage = React.createClass({
	render: function () {
		return (
			<section id="indexArticles">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h2 className="section-heading text-uppercase">独家新闻汇评</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-6 col-md-4">
							<div className="articleThumbnail thumbnail">
								<div className="thumbnailImg"  style={{backgroundImage: `url("../../image/articles/sampleArticle1.png")`}}>
								</div>
								<div className="caption">
									<h5>押错了赌注 又一家大宗商品对冲基金巨头倒下了</h5>
									<p>
										总部位于纽约，Jamison Capital的资产管理规模接近15亿美元。该基金去年亏损9%，部分原因是由于在下半年押错了天然气。</p>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4">
							<div className="articleThumbnail thumbnail">
								<div className="thumbnailImg"  style={{backgroundImage: `url("../../image/articles/sampleArticle2.jpg")`}}>
								</div>
								<div className="caption">
									<h5>智能合约初创公司Kadena完成225万美元pre-A轮融资 计划支持跨链交易项目</h5>
									<p>
										智能合约初创公司Kadena宣布完成了一笔225万美元的pre-A轮私募融资，旨在支持其最新的区块链项目。</p>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4">
							<div className="articleThumbnail thumbnail">
								<div className="thumbnailImg"  style={{backgroundImage: `url("../../image/articles/sampleArticle3.jpg")`}}>
								</div>
								<div className="caption">
									<h5>日本央行提高国债购买规模 美元兑日元应声上扬</h5>
									<p>日本央行提高国债购买规模 美元兑日元应声上扬</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}

});

module.exports = ArticlesPage;