import {combineReducers} from 'redux';
import CategoriesReducer from './reducer-categories';
import CurrentCategoryReducer from './reducer-currentCategory';
import ArticlesReducer from './reducer-articles';
import indexNewsReducer from './reducer-index-news';
import indexStudyReducer from './reducer-index-study';
import CurrentArticleReducer from './reducer-currentArticle';
import DeletedArticleReducer from './reducer-deletedArticle';
import VideosReducer from './reducer-videos';
import CurrentVideoReducer from './reducer-currentVideo';
import UsersReducer from './reducer-currentUser';

const allReducers = combineReducers({
    categories:CategoriesReducer,
    currentCategory:CurrentCategoryReducer,
    articles:ArticlesReducer,
    indexNews:indexNewsReducer,
    indexStudy:indexStudyReducer,
    currentArticle:CurrentArticleReducer,
    deletedArticle:DeletedArticleReducer,
    videos:VideosReducer,
    currentVideo:CurrentVideoReducer,
    currentUser:UsersReducer
});

export default allReducers