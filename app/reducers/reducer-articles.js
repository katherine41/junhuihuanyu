/**
 * Created by Katherine on 11/11/17.
 */
var initialArticles = [
    {
        "articleId": 1,
        "title": "haha",
        "summary": 'ffff',
        "createDate": 1507948531000,
        "visitCount": null,
        "articleCategory": {
            "id": 1,
            "categoryName": "fuck"
        }
    }];

export default function (state = initialArticles,action) {
    switch (action.type){
        case "START_ARTICLES_FETCH":
            console.log("Fetching Articles...");
            return action.payload;
            break;
        case "COMPLETE_ARTICLES_FETCH":
            console.log("All Articles",action.payload);
            return action.payload;
            break;
    }
    return state;
}