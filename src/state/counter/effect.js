import {
    call,
    put,
    takeEvery,
    takeLatest
} from 'redux-saga/effects'
import {
    COUNTER_DECREASED,
    COUNTER_INCREMENT
} from './action';
import Api from './service';

export function* incrementAsync() {
    yield delay(1000)
    yield put({
        type: 'INCREMENT'
    })
}

export default function* rootSaga() {
    yield takeEvery('COUNTER_DECREASED', incrementAsync)
}