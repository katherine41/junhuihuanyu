var React = require('react');
var TopBanner = require('../common-components/TopBanner');

import '../../../public/css/staticpages.css';


var Calendar = React.createClass({
	render: function () {
		return (
			<div>
				<TopBanner bannerName="财经日历，捕捉市场重大事件"/>
				<div className="staticPageContainer container">
					<iframe width="100%" height="600px" frameBorder="0" scrolling="yes"
							src="https://rili-d.jin10.com/open.php"></iframe>
				</div>
			</div>
		)
	}

});

module.exports = Calendar;