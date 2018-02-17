var initialIndexNews = [
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

export default function (state = initialIndexNews,action) {
	switch (action.type){
		case "START_INDEX_NEWS_FETCH":
			console.log("Fetching Articles news...");
			return action.payload;
			break;
		case "COMPLETE_INDEX_NEWS_FETCH":
			console.log("All Articles news",action.payload);
			return action.payload;
			break;
	}
	return state;
}