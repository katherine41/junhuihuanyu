import {combineReducers} from 'redux';
import CategoriesReducer from './reducer-categories';
import ArticlesReducer from './reducer-articles';
import CurrentArticleReducer from './reducer-currentArticle';

const allReducers = combineReducers({
    categories:CategoriesReducer,
    articles:ArticlesReducer,
    currentArticle:CurrentArticleReducer
});

export default allReducers