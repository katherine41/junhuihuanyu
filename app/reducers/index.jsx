import {combineReducers} from 'redux';
import CategoriesReducer from './reducer-categories';
import ArticlesReducer from './reducer-articles';
import CurrentArticleReducer from './reducer-currentArticle';
import CurrentCategoryReducer from './reducer-currentCategory';

const allReducers = combineReducers({
    categories:CategoriesReducer,
    articles:ArticlesReducer,
    currentArticle:CurrentArticleReducer,
    currentCategory:CurrentCategoryReducer
});

export default allReducers