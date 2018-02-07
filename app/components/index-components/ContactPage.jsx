var React = require('react');

var ContactPage = React.createClass({
	render: function () {
		return (
			<section id="contact" style={{backgroundImage: `url("../../image/background/contactBg.png")`}}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h2 className="section-heading text-uppercase">联系我们</h2>
							<ul id="junhuanContact">
								<li>电话：(86)13261819888</li>
								<li>地址：重庆市渝中区解放碑环球金融中心（WFC）11楼</li>
								<li>网址：www.waihui.top</li>
								<li>邮箱：jhhy2016@163.com</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<form id="contactForm" name="sentMessage" novalidate>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input className="form-control" id="name" type="text" placeholder="称谓 *" required/>
										</div>
										<div className="form-group">
											<input className="form-control" id="email" type="email" placeholder="邮箱 *" required/>
										</div>
										<div className="form-group">
											<input className="form-control" id="phone" type="tel" placeholder="电话"/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<textarea className="form-control" id="message" placeholder="留言 *" required></textarea>
										</div>
									</div>
									<div className="clearfix"></div>
									<div className="col-lg-12 text-center">
										<div id="success"></div>
										<button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">发送<i className="fa fa-paper-plane"></i></button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		)
	}

});

module.exports = ContactPage;