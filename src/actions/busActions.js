import axios from "axios";
import { BASE_API } from "../constants/ApiConstant";
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
    BUS_CANCEL_RESET
  } from "../constants/busConstants";

export const getBus = () => {
    return (dispatch) => {
      dispatch({
        type: BUS_FETCH_REQUEST,
      });
  
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      
      const url = BASE_API+"/admin/get_bus";
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: BUS_FETCH_SUCCESS,
            payload: response.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: BUS_FETCH_FAIL,
            payload: error,
          });
        });
    };
  };
  export const cancelBus=(bus_id)=>{
    return (dispatch) => {
      dispatch({
        type: BUS_CANCEL_REQUEST,
      });
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      };
     
     
      const url = BASE_API+"/admin/cancel_bus/"+bus_id;
      axios.delete(url, header)
      .then((response) => {
        dispatch({
          type: BUS_CANCEL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: BUS_CANCEL_FAIL,
          payload: error,
        });
      });
    }
  }