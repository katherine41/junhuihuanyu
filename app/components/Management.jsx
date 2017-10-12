var React = require('react');
import 'react-trumbowyg/dist/trumbowyg.min.css';
import Trumbowyg from 'react-trumbowyg';
import { FormGroup,InputGroup,FormControl,Button } from 'react-bootstrap';

class Management extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: '123'};
        this.submitArticle = this.submitArticle.bind(this);
    }
    submitArticle(){
        var articleHeader=$("#articleHeader").val();
        var articleContent=$("#react-trumbowyg").html();
        var articleTime=formatDate(new Date());
        var articleObj={
            articleHeader:articleHeader,
            articleContent:articleContent,
            articleTime:articleTime
        };
        console.log(articleObj);
        $("#articleContainer").html($("#react-trumbowyg").html());
    }
    render() {
        return (
            <div>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon>文章标题：</InputGroup.Addon>
                        <FormControl type="text" id="articleHeader" placeholder="请输入文章标题"/>
                    </InputGroup>
                </FormGroup>
                <Trumbowyg id='react-trumbowyg' buttons={
                    [
                        ['viewHTML'],
                        ['formatting'],
                        'btnGrp-semantic',
                        'btnGrp-justify',
                        'btnGrp-lists',
                        ['fullscreen']
                    ]
                }
                           data='aaaa'
                           placeholder='Type your text!'
                           />
                <Button bsStyle="primary" onClick={this.submitArticle}>发布</Button>

                <div id="articleContainer"></div>
            </div>
        )
    }
}
function formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    if (dd < 10){
        dd = "0"+dd;
    }
    if (mm < 10){
        mm = "0"+mm;
    }
    var yyyy = date.getFullYear();
    var hh=date.getHours();
    var min=date.getMinutes();
    var ss=date.getSeconds();
    if(min>=0&&min<10){
        min="0"+min;
    }
    if(ss>=0&&ss<10){
        ss="0"+ss;
    }
    return yyyy+"-"+mm+"-"+dd+" "+hh+":"+min+":"+ss;
}

module.exports = Management;
