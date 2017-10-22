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
        var articleSummary=$("#articleSummary").val();
        var articleContent="<div>"+$("#react-trumbowyg").html()+"</div>";
        var articleObj={
            title:articleHeader,
            summary:articleSummary,
            content:articleContent
        };
        $.ajax({
            type:'POST',
            url:'http://b181a96c.ngrok.io/article',
            // url:'/article',
            data: JSON.stringify(articleObj),
            contentType: "application/json",
            dataType: 'text',
            success: function(data) {
                console.log(data);
                // $("#articleContainer").html($("#react-trumbowyg").html());
            },
            error:function(err){
                console.log(2);
                console.log("error");
            }
        });
    }
    render() {
        return (
            <div className="newVideoWrapper">
                <h4>添加新文章</h4>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon>标题</InputGroup.Addon>
                        <FormControl type="text" id="articleHeader" placeholder="请输入文章标题"/>
                    </InputGroup>
                </FormGroup>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon">摘要</span>
                        <textarea id="articleSummary" className="form-control" rows="2" placeholder="请输入文章摘要"/>

                        {/*<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">*/}
                    </div>
                </div>
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
                           data=''
                           placeholder='请输入文章内容'
                />
                <Button bsStyle="primary" onClick={this.submitArticle}>发布</Button>

                {/*<div id="articleContainer"></div>*/}
            </div>
        )
    }
}

module.exports = Management;
