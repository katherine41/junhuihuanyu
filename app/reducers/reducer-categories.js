/**
 * Created by Katherine on 11/10/17.
 */
var initialCate=[{id:"1",categoryName:"分类4"},{id:"2",categoryName:"分类6"}];

export default function (state = initialCate,action) {
    switch (action.type){
        case "START_CATEGORY_FETCH":
            console.log("Fetching Categories...");
            return action.payload;
            break;
        case "COMPLETE_CATEGORY_FETCH":
            console.log("All Categories",action.payload);
            return action.payload;
            break;
    }
    return state;
}