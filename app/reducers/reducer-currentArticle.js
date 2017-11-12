/**
 * Created by Katherine on 11/12/17.
 */
var initialArticle =
    {
        "articleId": 1,
        "title": "haha",
        "summary": 'ffff',
        "createDate": 1507948531000,
        "visitCount": null,
        "articleCategory": {
            "id": 1,
            "categoryName": "fuck"
        },
        "content": "<div><p>newArticle</p></div>"
    };

export default function (state = initialArticle,action) {
    switch (action.type){
        case "START_CURRENTARTICLE_FETCH":
            console.log("Fetching Article...");
            return action.payload;
            break;
        case "COMPLETE_CURRENTARTICLE_FETCH":
            console.log("Current Article",action.payload);
            return action.payload;
            break;
    }
    return state;
}