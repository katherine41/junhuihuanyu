import {fetchCategory} from './action-categories';
import {addCategory} from './action-categories';
import {deleteCategory} from './action-categories';
import {fetchArticles} from './action-articles';
import {fetchArticle} from './action-articles';
import {fetchArticleByCate} from './action-articles';
import {addArticle} from './action-articles';
import {deleteArticle} from './action-articles';
import {modifyArticle} from './action-articles';
import {fetchVideos} from './action-videos';
import {fetchVideo} from './action-videos';
import {deleteVideo} from './action-videos';
import {fetchUser} from './action-users';


var allActions={
    categoryAction:{
        fetchCategory:fetchCategory,
        addCategory:addCategory,
        deleteCategory:deleteCategory
    },
    articleAction:{
        fetchArticles:fetchArticles,
        fetchArticle:fetchArticle,
        fetchArticleByCate:fetchArticleByCate,
        addArticle:addArticle,
        deleteArticle:deleteArticle,
        modifyArticle:modifyArticle
    },
    videoAction:{
        fetchVideos:fetchVideos,
        fetchVideo:fetchVideo,
        deleteVideo:deleteVideo
    },
    userAction:{
        fetchCurrentUser:fetchUser
    }
};
export default allActions;