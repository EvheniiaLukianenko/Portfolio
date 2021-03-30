import {put, takeLatest} from 'redux-saga/effects'
import * as api from '../../services/fetch-data';
import {actions} from "../actions/actions";

function* fetchItems(action) {
    console.log('fetch items action payload', action.payload);
    try {
        const result = yield api.getListData(action.payload.listId, action.payload.pageNumber);
        console.log('result', result);
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

// function* openModal() {
//     yield put({type: actions.OPEN_MODAL});
// }

// function* closeModal() {
//     yield put({type: actions.CLOSE_MODAL});
// }

function* watchItems() {
    yield takeLatest(actions.FETCH_LIST, fetchItems);
    yield takeLatest(actions.FETCH_ITEM, fetchItem);
    // yield takeLatest(actions.OPEN_MODAL, openModal);
    // yield takeLatest(actions.CLOSE_MODAL, closeModal);
}

export default watchItems;

