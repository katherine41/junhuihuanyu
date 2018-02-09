var React = require('react');

var StudyPage = React.createClass({
	render: function () {
		return (
			<section id="indexStudy">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h2 className="section-heading text-uppercase">外汇入门学习</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-6 col-md-4">
							<div className="articleThumbnail thumbnail">
								<div className="thumbnailImg"  style={{backgroundImage: `url("../../image/articles/sampleArticle4.jpg")`}}>
								</div>
								<div className="caption">
									<h5>外汇交易中的三种分析方法</h5>
									<p>
										恭喜你，你已顺利通过学前教育。现在，你将正式开始外汇“幼儿园”课程学习...</p>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4">
							<div className="articleThumbnail thumbnail">
								<div className="thumbnailImg"  style={{backgroundImage: `url("../../image/articles/sampleArticle5.jpg")`}}>
								</div>
								<div className="caption">
									<h5>你必须掌握的外汇专用术语</h5>
									<p>
										外汇中“手”是什么？在过去，以特定数额进行的即期外...</p>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4">
							<div className="articleThumbnail thumbnail">
								<div className="thumbnailImg"  style={{backgroundImage: `url("../../image/articles/sampleArticle6.jpg")`}}>
								</div>
								<div className="caption">
									<h5>什么时间交易外汇最佳</h5>
									<p>外汇交易时段现在你知道 什么是外汇，为什么你应该将它...</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}

});

module.exports = StudyPage;