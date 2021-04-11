import { fork, all } from 'redux-saga/effects'
import watchItems from './effects';

function* rootSaga() {
    yield all([
        fork(watchItems),
    ])
}

export default rootSaga;
