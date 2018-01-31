var React = require('react');
var {Link} = require('react-router');
import env_variables from '../components/environment.js';


var PopupPanel = React.createClass({
	closePopupModal(){
		$("#addSuccessModal").css("display","none");
    },
    render:function(){
		const currentHashLocation = window.location.hash.split('/')[1];
		let popupBtnContent = null;
		let popupContentObj = {
			header: '添加成功！',
			btn1: '查看所有文章',
			btn2: '继续添加',
		};
		switch (currentHashLocation) {
			case 'articles':
				popupContentObj.header = '确认删除此文章？';
				popupContentObj.btn1 = '确认';
				popupContentObj.btn2 = '取消';
				popupBtnContent = <button type="button" className="blockBtn" onClick={()=>this.props.deleteArticle(this.props.deletedArticleId)}>
					{popupContentObj.btn1}
				</button>;
				break;
			case 'management':
				popupContentObj.header = '添加成功！';
				popupContentObj.btn1 = '查看所有文章';
				popupContentObj.btn2 = '继续添加';
				popupBtnContent = <button type="button" className="blockBtn" >
					<Link to="/articles/">{popupContentObj.btn1}</Link>
				</button>;
		}
        return (
        <div className="popupContainer modal" id="addSuccessModal">
            <div className="modal-content">
                <span className="pull-right closeModalBtn"  onClick={()=>this.closePopupModal()}>x</span>
                <h4>{popupContentObj.header}</h4>
				{popupBtnContent}
                <button type="button" className="blockBtn" onClick={()=>this.closePopupModal()}>
					{popupContentObj.btn2}
                </button>
            </div>
        </div>
        )
    }

});


module.exports = PopupPanel;
