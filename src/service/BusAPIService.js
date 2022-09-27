import axios from "axios";
import { BASE_API } from "../constants/ApiConstant";

const BUS_API_BASE_URL = "http://localhost:8080";

class ApiService {
  fetchBusById(aid) {
    return axios.get(BASE_API+"/customer/select_bus", {
      params: { aid: aid },
    });
  }

  editBus(bus) {
    return axios.put(BASE_API+"/admin/update_bus", bus);
  }

  getBookingsByBusId(aid) {
    return axios.get(BASE_API+"/admin/get_bookings/" + aid);
  }

  getBookingsByUserId(uid){
    return axios.get(BASE_API+'/customer/get_userbookings/' + uid)
}

  cancelBookingByBookId(bid) {
    return axios.delete(BASE_API+"/admin/delete_booking", {
      params: { bid: bid },
    });
  }

  addBus(bus) {
    return axios.post(BASE_API+"/superadmin/add_bus", bus);
  }
  updateBooking(busId) {
    console.log(busId);
    return axios.put(
      BASE_API+"/admin/update_booking/" + busId
    );
  }

  cancelBookingByUserId(bId){
    return axios.delete(BASE_API+'/customer/cancel_ticket' ,{ params: { bId : bId } })
}

  getBus(from, to, departure) {
    //console.log("in get bus"+fromCity + "  " + toCity + "  " + departureDate);
    return axios.get(
      BASE_API+"/customer/search_bus/" + departure,
      {
        params: {
          fromCity: from,
          toCity: to,
        },
      }
    );
  }
  getBusNames(){
    return axios.get(BASE_API+'/superadmin/bus_names')
  }
  addCities(cities){
    console.log("add cities axios");
    return axios.put(BASE_API+'/superadmin/add_city', cities)
  }
}

export default new ApiService();
