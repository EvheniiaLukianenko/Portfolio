import {put, takeLatest} from 'redux-saga/effects'
import * as api from '../../services/fetch-data';
import {actions} from "../actions/actions";

function* fetchItems() {
    try {
        const result = yield api.getListData();
        yield put({type: actions.FETCH_LIST_SUCCESS, payload: result});
    } catch (e) {
        yield put({type: actions.FETCH_LIST_ERROR, payload: {error: e}});
    }
}


function* fetchItem(action) {
    try {
        const result = yield api.getItem(action.payload.listId, action.payload.itemId);
        yield put({type: actions.FETCH_ITEM_SUCCESS, payload: result});
    } catch (e) {
        yield put({type: actions.FETCH_ITEM_ERROR, payload: {error: e}});
    }
}

function* watchItems() {
    yield takeLatest(actions.FETCH_LIST, fetchItems);
    yield takeLatest(actions.FETCH_ITEM, fetchItem);
}

export default watchItems;

