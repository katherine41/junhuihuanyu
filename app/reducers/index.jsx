import {combineReducers} from 'redux';
import CategoriesReducer from './reducer-categories';
import ArticlesReducer from './reducer-articles';
import CurrentArticleReducer from './reducer-currentArticle';
import CurrentCategoryReducer from './reducer-currentCategory';
import VideosReducer from './reducer-videos';

const allReducers = combineReducers({
    categories:CategoriesReducer,
    articles:ArticlesReducer,
    currentArticle:CurrentArticleReducer,
    currentCategory:CurrentCategoryReducer,
    videos:VideosReducer
});

export default allReducers