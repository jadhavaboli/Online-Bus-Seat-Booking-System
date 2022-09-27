import axios from 'axios';
import qs from 'qs';
import { BASE_API } from '../constants/ApiConstant';
const SUPERADMIN_API_BASE_URL = 'http://localhost:8080';

class ApiService{
    fetchFeedbackByBusId(busId) {
        return axios.get(BASE_API+'/superadmin/feedback', { params: { busId : busId } } );
    }
    getRevenueReport(bus,period) {
        return axios.get(BASE_API+'/superadmin/revenue_report'  ,{ params: { busName : bus, interval :period }, paramsSerializer: (params) => {
            return qs.stringify(params, { arrayFormat: 'repeat' })
          }, } );
    }
    getTotalBookings(){
        return axios.get(BASE_API+'/superadmin/get_total_bookings');
    }
    getCancelledBookings(){
        return axios.get(BASE_API+'/superadmin/get_cancelled_bookings'); 
    }
    getBusRevenue(){
        return axios.get(BASE_API+'/superadmin/get_bus_revenue');
    }
}

export default new ApiService();