import main from "./main";
import post from "./post";
import search from "./search"

import {combineReducers} from 'redux';

export default combineReducers({
    main,
    post,
    search,
});