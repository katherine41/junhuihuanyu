import {combineReducers} from 'redux';
import CategoriesReducer from './reducer-categories';
import CurrentCategoryReducer from './reducer-currentCategory';
import ArticlesReducer from './reducer-articles';
import CurrentArticleReducer from './reducer-currentArticle';
import VideosReducer from './reducer-videos';
import CurrentVideoReducer from './reducer-currentVideo';
import UsersReducer from './reducer-currentUser';

const allReducers = combineReducers({
    categories:CategoriesReducer,
    currentCategory:CurrentCategoryReducer,
    articles:ArticlesReducer,
    currentArticle:CurrentArticleReducer,
    videos:VideosReducer,
    currentVideo:CurrentVideoReducer,
    currentUser:UsersReducer
});

export default allReducers