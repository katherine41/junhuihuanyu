/**
 * Created by Katherine on 10/17/17.
 */
var React = require('react');
var {Link} = require('react-router');
var TitleLine = require('../TitleLine');

function CategoryItem(props) {
    if(props.currentCateId==props.categoryId){
		console.log(props.cateNum);
		return (
            <Link to={`/articleCates/${props.categoryId}`}>
                <li className="list-group-item cateSelected">
                    <span className="badge">{props.cateNum}</span>
                    {props.categoryName}
                </li>
            </Link>
        );
    }else{
        return (
            <Link to={`/articleCates/${props.categoryId}`}>
                <li className="list-group-item">
                    <span className="badge">{props.cateNum}</span>
                    {props.categoryName}
                </li>
            </Link>
        );
    }

}

var CategoryList = React.createClass({
    render: function () {
    var categories=this.props.categories;
    // console.log("categories",categories);
    var cateId=this.props.currentCateId;
    const listItems=categories.map(
        function (category) {
            return <CategoryItem key={category.id} categoryId={category.id} categoryName={category.categoryName} cateNum={category.articlesNum} currentCateId={cateId}/>
        }
    );
    return (
    <div className="articleCategory_container">
        <TitleLine titleNameChn="文章分类" titleNameEng=""/>
        <ul className="list-group">{listItems}</ul>
    </div>
    );
    }

});



module.exports = CategoryList;
