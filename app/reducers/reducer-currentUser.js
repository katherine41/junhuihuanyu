/**
 * Created by Katherine on 11/30/17.
 */
var initialUser =
    {
        "userId": 1,
        "password": "aaaa",
        "userName": 'Yuxi',
        "createDate": 1507948531000,
        "phoneNumber": "7028570160",
    };

export default function (state = initialUser,action) {
    switch (action.type){
        case "START_CURRENTUSER_FETCH":
            console.log("Fetching User...");
            return action.payload;
            break;
        case "COMPLETE_CURRENTUSER_FETCH":
            console.log("Current User",action.payload);
            return action.payload;
            break;
    }
    return state;
}