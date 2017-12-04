import env_variables from '../../components/environment';

var React = require('react');

var AddVideo = React.createClass({
    componentDidMount:function(){
        $("#submitVideo").click(function(){
            $( "#submitVideo" ).prop( "disabled", true );
            var formData = new FormData();
            formData.append('fileName',$('#videoName').val());
            formData.append('cover', document.getElementById('videoCoverBtn').files[0]);
            formData.append('video', document.getElementById('uploadVideoBtn').files[0]);
            // formData.append('videoLength', videoLength);
            var request = new XMLHttpRequest();
            request.onreadystatechange = function(){
                if(request.readyState === 4){
                    console.log(request.response);
                    $( "#submitVideo" ).prop( "disabled", false );
                    $("#progressContainer").css("display","none");
                }
            };

            //dynamically display progress
            request.upload.addEventListener('progress', function(e){
                var completePercent=Math.round(e.loaded/e.total * 100)+ "%";
                $("#progressBar").width(completePercent).text(completePercent);
            }, false);

            request.open('POST', env_variables.apiEndpoint+'/rest/video');
            request.send(formData);
            $("#progressContainer").css("display","block");
        });
        $("#uploadVideoBtn").change(function() {
            var videoName=this.files[0].name;
            var videoSize=formatBytes(this.files[0].size);
            $("#uploadVideoBtnContainer .form-text").text("已选择视频："+videoName+" ("+videoSize+")");
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
    },
    render:function(){
        return (
            <div>
                <form id="videoForm">
                    <div className="form-group row">
                        <label htmlFor="videoName" className="col-xs-2 col-form-label">视频标题</label>
                        <div className="col-xs-4">
                            <input type="text"  name="fileName" className="form-control" id="videoName" placeholder="请输入视频标题"/>
                        </div>
                    </div>
                    <div className="form-group row uploadContainer" id="uploadVideoBtnContainer">
                        <label htmlFor="uploadVideoBtn" className="col-form-label"><img src="../../image/video.svg"/>选择视频</label>
                        <input type="file" name="video" className="form-control-file" id="uploadVideoBtn" accept=".mov, .mp4, .avi"/>
                        <small className="form-text text-muted">视频格式：.avi, .mp4, .mov</small>
                    </div>
                    <div className="form-group row uploadContainer" id="videoCoverBtnContainer">
                        <div id="videoCoverBtnWrapper">
                            <label htmlFor="videoCoverBtn" className="col-form-label"><img src="../../image/upload.svg"/>选择封面</label>
                            <input type="file" name="cover" className="form-control-file" id="videoCoverBtn" accept=".jpg, .jpeg, .png"/>
                        </div>
                        <div id="videoCoverImgWrapper">
                            <span>x</span>
                            <img src="#"/>
                            {/*<img id="videoCoverImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/290px-Starry_Night_Over_the_Rhone.jpg" />*/}
                        </div>

                        <small className="form-text text-muted">图片格式：.jpg, .jpeg, .png</small>
                    </div>
                    <div id="progressContainer" className="progress progress-striped active">
                        <div id="progressBar" className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"> </div>
                    </div>

                    <input className="blockBtn" type='button' id='submitVideo' value='上传视频'/>
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
}
