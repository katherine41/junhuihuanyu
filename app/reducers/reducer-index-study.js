var initialIndexStudy = [
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

export default function (state = initialIndexStudy,action) {
	switch (action.type){
		case "START_INDEX_STUDY_FETCH":
			console.log("Fetching Articles study...");
			return action.payload;
			break;
		case "COMPLETE_INDEX_STUDY_FETCH":
			console.log("All Articles study",action.payload);
			return action.payload;
			break;
	}
	return state;
}