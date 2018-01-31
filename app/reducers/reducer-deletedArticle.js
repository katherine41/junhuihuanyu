var defaultDeletedArticle = 1;

export default function (state = defaultDeletedArticle,action) {
	switch (action.type){
		case "PASS_DELETINGARTICLE_ID":
			console.log("Deleting Article ID",action.payload);
			return action.payload;
			break;
	}
	return state;
}