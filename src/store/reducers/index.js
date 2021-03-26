import { combineReducers } from 'redux'
import itemsReducer from './items'
import itemReducer from './current-item'


export default combineReducers({
    listData: itemsReducer,
    item: itemReducer,
});
