import {fetchCategory} from './action-categories';
import {addCategory} from './action-categories';
import {fetchArticles} from './action-articles';
import {fetchArticle} from './action-articles';
import {addArticle} from './action-articles';


var allActions={
    categoryAction:{
        fetchCategory:fetchCategory,
        addCategory:addCategory
    },
    articleAction:{
        fetchArticles:fetchArticles,
        fetchArticle:fetchArticle,
        addArticle:addArticle
    }
};
export default allActions;