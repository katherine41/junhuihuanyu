/**
 * Created by Katherine on 11/12/17.
 */
var initialArticles = [
    {
        "videoId": 1,
        "videoName": "avc",
        "videoLength": 395,
        "createDate": 1508815216000,
        "imageUrl":"/rest/image/1",
        "videoUrl": "/rest/video/1",
    }];

export default function (state = initialArticles,action) {
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