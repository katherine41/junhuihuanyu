var React = require('react');

var ThirdPage = React.createClass({
	render: function () {
		return (
			<section className="bg-light" id="portfolio">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h2 className="section-heading text-uppercase">骏寰服务</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 col-sm-6 portfolio-item">
							<a className="portfolio-link" href="#portfolioModal1">
								<div className="portfolio-hover">
									<div className="portfolio-hover-content">
										{/*<i className="fa fa-plus fa-3x"></i>*/}
									</div>
								</div>
								<img className="img-fluid" src="../../image/services/01-thumbnail.jpg" alt=""/>
							</a>
							<div className="portfolio-caption">
								<h4>Threads</h4>
								<p className="text-muted">Illustration</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 portfolio-item">
							<a className="portfolio-link" href="#portfolioModal2">
								<div className="portfolio-hover">
									<div className="portfolio-hover-content">
										{/*<i className="fa fa-plus fa-3x"></i>*/}
									</div>
								</div>
								<img className="img-fluid" src="../../image/services/02-thumbnail.jpg" alt=""/>
							</a>
							<div className="portfolio-caption">
								<h4>Explore</h4>
								<p className="text-muted">Graphic Design</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 portfolio-item">
							<a className="portfolio-link" href="#portfolioModal3">
								<div className="portfolio-hover">
									<div className="portfolio-hover-content">
										{/*<i className="fa fa-plus fa-3x"></i>*/}
									</div>
								</div>
								<img className="img-fluid" src="../../image/services/02-thumbnail.jpg" alt=""/>
							</a>
							<div className="portfolio-caption">
								<h4>Finish</h4>
								<p className="text-muted">Identity</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 portfolio-item">
							<a className="portfolio-link" href="#portfolioModal4">
								<div className="portfolio-hover">
									<div className="portfolio-hover-content">
										{/*<i className="fa fa-plus fa-3x"></i>*/}
									</div>
								</div>
								<img className="img-fluid" src="../../image/services/02-thumbnail.jpg" alt=""/>
							</a>
							<div className="portfolio-caption">
								<h4>Lines</h4>
								<p className="text-muted">Branding</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 portfolio-item">
							<a className="portfolio-link" href="#portfolioModal5">
								<div className="portfolio-hover">
									<div className="portfolio-hover-content">
										{/*<i className="fa fa-plus fa-3x"></i>*/}
									</div>
								</div>
								<img className="img-fluid" src="../../image/services/02-thumbnail.jpg" alt=""/>
							</a>
							<div className="portfolio-caption">
								<h4>Southwest</h4>
								<p className="text-muted">Website Design</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 portfolio-item">
							<a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
								<div className="portfolio-hover">
									<div className="portfolio-hover-content">
										{/*<i className="fa fa-plus fa-3x"></i>*/}
									</div>
								</div>
								<img className="img-fluid" src="../../image/services/02-thumbnail.jpg" alt=""/>
							</a>
							<div className="portfolio-caption">
								<h4>Window</h4>
								<p className="text-muted">Photography</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}

});

module.exports = ThirdPage;