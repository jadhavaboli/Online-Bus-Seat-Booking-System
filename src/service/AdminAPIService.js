import axios from 'axios';
import { BASE_API } from '../constants/ApiConstant';
const ADMIN_API_BASE_URL = 'http://localhost:8080';

class ApiService{
    fetchPassengersByBusId(busId) {
        return axios.get(BASE_API+'/admin/passenger_list/' + busId );
    }
}

export default new ApiService();