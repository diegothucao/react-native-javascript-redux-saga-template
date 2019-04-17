import {
  FETCHING_DEALS_SUCCESS, FETCHING_DEALS_FAIL, FETCHING_DEALS_SEARCH,
  FETCHING_DEAL_DETAIL_SUCCESS, FETCHING_DEAL_DETAIL_FAIL, FETCHING_DEAL_DETAIL
} from '../util/constants'
import { put, takeEvery } from 'redux-saga/effects'
import ajax from '../util/ajax'

function* searchDeals(action) {
  try {
    const data = yield ajax.fetchDealSearchResults(action.payload)
    yield put({ type: FETCHING_DEALS_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_DEALS_FAIL })
  }
}

function* fetchDetail(action) {
  try {
    const data = yield ajax.fetchDealDetail(action.payload)
    yield put({ type: FETCHING_DEAL_DETAIL_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_DEAL_DETAIL_FAIL })
  }
}

function* dataSaga() {
  yield takeEvery(FETCHING_DEALS_SEARCH, searchDeals)
  yield takeEvery(FETCHING_DEAL_DETAIL, fetchDetail)
}

export default dataSaga