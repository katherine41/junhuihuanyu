import {combineReducers} from 'redux';
import CategoriesReducer from './reducer-categories';
import ArticlesReducer from './reducer-articles';
import CurrentArticleReducer from './reducer-currentArticle';
import CurrentCategoryReducer from './reducer-currentCategory';
import VideosReducer from './reducer-videos';
import UsersReducer from './reducer-currentUser';

const allReducers = combineReducers({
    categories:CategoriesReducer,
    articles:ArticlesReducer,
    currentArticle:CurrentArticleReducer,
    currentCategory:CurrentCategoryReducer,
    videos:VideosReducer,
    currentUser:UsersReducer
});

export default allReducers