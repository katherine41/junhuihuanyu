/**
 * Created by Katherine on 11/12/17.
 */
var initialVideos = [{
    "videoId":1,
    "videoName":"视频1",
    "imageUrl":"../../image/star.jpg",
    "videoUrl":"../../image/output.MOV",
    "videoLength":10,
    "createdDate":1508725377000,

},{
    "videoId":2,
    "videoName":"视频1",
    "imageUrl":"../../image/star.jpg",
    "videoUrl":"../../image/output.MOV",
    "videoLength":10,
    "createdDate":1508725377000,
}];

export default function (state = initialVideos,action) {
    switch (action.type){
        case "START_VIDEOS_FETCH":
            console.log("Fetching Videos...");
            return action.payload;
            break;
        case "COMPLETE_VIDEOS_FETCH":
            console.log("All Videos",action.payload);
            return action.payload;
            break;
    }
    return state;
}