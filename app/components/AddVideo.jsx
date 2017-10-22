var React = require('react');
// http://codular.com/javascript-ajax-file-upload-with-progress
// http://www.dave-bond.com/blog/2010/01/JQuery-ajax-progress-HMTL5/
$(document).ready(function(){
    $("#videoForm").submit(function(e) {
        e.preventDefault();
        var formData = new FormData(this);
        formData.append('fileName',$('#videoName').val());
        formData.append('cover', $('#videoCoverBtn')[0]);
        formData.append('video', $('#uploadVideoBtn')[0]);
        $.ajax({
            type:'POST',
            url: "http://41159a93.ngrok.io/rest/video",
            data:formData,
            cache:false,
            contentType: false,
            processData: false,

            success:function(data)
            {
                console.log(data);
            }
        });

    });
    $("#uploadVideoBtn").change(function() {
        var videoName=this.files[0].name;
        var videoSize=formatBytes(this.files[0].size);
        $("#uploadVideoBtnContainer .form-text").text("已选择视频："+videoName+" ("+videoSize+")");
        console.log(this.files[0]);

    });
    $("#videoCoverBtn").change(function() {
        var input=this;
        var videoCoverName=this.files[0].name;
        var videoSize=formatBytes(this.files[0].size);
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#videoCoverImgWrapper img').attr('src', e.target.result);
                $("#videoCoverBtnWrapper").css("display","none");
                $("#videoCoverImgWrapper").css("display","block");
                $("#videoCoverBtnContainer .form-text").text("已选择图片："+videoCoverName+" ("+videoSize+")");
            };
            reader.readAsDataURL(input.files[0]);
        }
    });
    $("#videoCoverImgWrapper span").click(function(){

        $("#videoCoverBtnWrapper").css("display","block");
        $("#videoCoverImgWrapper").css("display","none");
        $("#videoCoverBtnContainer .form-text").text("图片格式：.jpg, .jpeg, .png");
    });

});


var AddVideo = React.createClass({
    render:function(){
        return (
            <div className="newVideoWrapper">
                <form id="videoForm" method="POST" action="http://b979401a.ngrok.io/rest/video" encType="multipart/form-data">
                    <div className="form-group row">
                        <label htmlFor="videoName" className="col-xs-2 col-form-label">视频标题</label>
                        <div className="col-xs-4">
                            <input type="text"  name="fileName" className="form-control" id="videoName" placeholder="请输入视频标题"/>
                        </div>
                    </div>
                    <div className="form-group row uploadContainer" id="uploadVideoBtnContainer">
                        <label htmlFor="uploadVideoBtn" className="col-form-label"><img src="../../video.svg"/>选择视频</label>
                        <input type="file" name="video" className="form-control-file" id="uploadVideoBtn" accept=".mov, .mp4, .avi"/>
                        <small className="form-text text-muted">视频格式：.avi, .mp4, .mov</small>
                    </div>
                    <div className="form-group row uploadContainer" id="videoCoverBtnContainer">
                        <div id="videoCoverBtnWrapper">
                            <label htmlFor="videoCoverBtn" className="col-form-label"><img src="../../upload.svg"/>选择封面</label>
                            <input type="file" name="cover" className="form-control-file" id="videoCoverBtn" accept=".jpg, .jpeg, .png"/>
                        </div>
                        <div id="videoCoverImgWrapper">
                            <span>x</span>
                            <img src="#"/>
                        {/*<img id="videoCoverImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/290px-Starry_Night_Over_the_Rhone.jpg" />*/}
                        </div>

                        <small className="form-text text-muted">图片格式：.jpg, .jpeg, .png</small>
                    </div>
                    {/*<div className="progress progress-striped active">*/}
                        {/*<div id="progressBar" className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={style}>*/}
                            {/*60%*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

});


module.exports = AddVideo;

function formatBytes(bytes) {
    if(bytes < 1024) return bytes + " Bytes";
    else if(bytes < 1048576) return(bytes / 1024).toFixed(1) + " KB";
    else if(bytes < 1073741824) return(bytes / 1048576).toFixed(1) + " MB";
    else return(bytes / 1073741824).toFixed(1) + " GB";
};