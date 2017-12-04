/**
 * Created by Katherine on 12/3/17.
 */
    var initialVideo =
    {
        "videoId":1,
        "videoName":"视频1",
        "imageUrl":"../../image/star.jpg",
        "videoUrl":"../../image/output.MOV",
        "videoLength":10,
        "createdDate":1508725377000,

    };

export default function (state = initialVideo,action) {
    switch (action.type){
        case "START_CURRENTVIDEO_FETCH":
            console.log("Fetching Video...");
            return action.payload;
            break;
        case "COMPLETE_CURRENTVIDEO_FETCH":
            console.log("Current Video",action.payload);
            return action.payload;
            break;
    }
    return state;
}