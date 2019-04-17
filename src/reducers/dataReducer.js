import {
        FETCHING_DEALS_SUCCESS, FETCHING_DEALS_FAIL
        , FETCHING_DEALS_SEARCH, BACK_TO_DEAL_LIST,
        FETCHING_DEAL_DETAIL, FETCHING_DEAL_DETAIL_SUCCESS, FETCHING_DEAL_DETAIL_FAIL
} from '../util/constants'

const initialState = {
        data: [],
        currentDeal: null,
        isFetching: false,
        error: false
}

export default dataReducer = (state = initialState, action) => {
        switch (action.type) {
                case FETCHING_DEALS_SEARCH:
                        return {
                                ...state,
                                data: [],
                                isFetching: true
                        }
                case FETCHING_DEALS_SUCCESS:
                        return {
                                ...state,
                                isFetching: false,
                                data: action.data
                        }
                case FETCHING_DEALS_FAIL:
                        return {
                                ...state,
                                isFetching: false,
                                error: true
                        }
                case FETCHING_DEAL_DETAIL:
                        return {
                                ...state,
                                isFetching: true,
                                currentDeal: null
                        }
                case FETCHING_DEAL_DETAIL_SUCCESS:
                        return {
                                ...state,
                                isFetching: false,
                                currentDeal: action.data
                        }
                case FETCHING_DEAL_DETAIL_FAIL:
                        return {
                                ...state,
                                isFetching: false,
                                error: true
                        }
                case BACK_TO_DEAL_LIST:
                        return {
                                ...state,
                                isFetching: false,
                                currentDeal: null
                        }
                default:
                        return state
        }
}