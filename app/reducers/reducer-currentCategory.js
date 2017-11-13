/**
 * Created by Katherine on 11/12/17.
 */
var initialArticle =
    {"categoryName":"","id":1};

export default function (state = initialArticle, action) {
    switch (action.type) {
        case "GET_CURRENT_CATEGORY":
            return action.payload;
            break;
    }
    return state;
}