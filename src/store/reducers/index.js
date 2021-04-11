import { combineReducers } from 'redux'
import itemsReducer from './items'
import itemReducer from './current-item'
import modalReducer from './modal';


export default combineReducers({
    list: itemsReducer,
    item: itemReducer,
    modal: modalReducer,
});
