import {
  BUS_FETCH_REQUEST,
  BUS_FETCH_SUCCESS,
  BUS_FETCH_FAIL,
  BUS_FETCH_RESET,
  BUS_ADD_REQUEST,
  BUS_ADD_SUCCESS,
  BUS_ADD_FAIL,
  BUS_ADD_RESET,
  BUS_CANCEL_REQUEST,
  BUS_CANCEL_SUCCESS,
  BUS_CANCEL_FAIL,
  BUS_CANCEL_RESET,
} from "../constants/busConstants";

export const fetchBusReducer = (state = {}, action) => {
    switch(action.type) {
        case BUS_FETCH_REQUEST :
            return {loading : true}
        case BUS_FETCH_SUCCESS:
            return {loading : false, response: action.payload}
        case BUS_FETCH_FAIL:
            return {loading : false, error: action.payload}
        case BUS_FETCH_RESET:
            return {}
        default:
            return state
    }
}
export const cancelBusReducer = (state = {}, action) => {
    switch(action.type) {
        case BUS_CANCEL_REQUEST :
            return {loading : true}
        case BUS_CANCEL_SUCCESS:
            return {loading : false, response: action.payload}
        case BUS_CANCEL_FAIL:
            return {loading : false, error: action.payload}
        case BUS_CANCEL_RESET:
            return {}
        default:
            return state
    }
}