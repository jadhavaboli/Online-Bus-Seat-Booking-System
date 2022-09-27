import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelBus, getBus } from "../actions/busActions";
import Header from "../components/Header";

const CancelBusScreen = (props) => {
  const [message , setMessage] = useState('')
  const dispatch = useDispatch();
  const bus = useSelector((store) => store.fetchBus);
  const { loading, error, response } = bus;
  useEffect(() => {
    dispatch(getBus())
    
  }, []);
  const onCancel=(bus_id)=>{
      dispatch(cancelBus(bus_id))
      if(response.status === 'success'){
        setMessage('Bus Deleted Successfully')  
        props.history.push('/admin')   
      }
      
     
  }
  return (
    <div>
      <Header title="Bus List" />
      <table class="table caption-top">
        <thead>
          <tr>
            <th scope="col">Bus Name</th>
            <th scope="col">Bus Number</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Departure Date</th>
            <th scope="col">Arrival Date</th>
            <th scope="col">Departure Time</th>
            <th scope="col">Arrival Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((bus) => {
              return(
              <tr>
                <td scope="row">{bus.busName}</td>
                <td>{bus.busNo}</td>
                <td>{bus.fromCity}</td>
                <td>{bus.toCity}</td>
                <td>{bus.departureDate}</td>
                <td>{bus.arrivalDate}</td>
                <td>{bus.departureTime}</td>
                <td>{bus.arrivalTime}</td>
                <td><button onClick={()=>onCancel(bus.id)} type="submit" className="btn btn-primary rounded submit p-2 px-4">Cancel</button></td>
              </tr>)
            })}
        </tbody>
      </table>
      <h6 Style="color: red; text-align: center">{message}</h6>
    </div>
  );
};

export default CancelBusScreen;
