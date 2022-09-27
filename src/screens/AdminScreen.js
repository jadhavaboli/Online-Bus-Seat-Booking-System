import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBus } from "../actions/busActions";
import Header from "../components/Header";

const AdminScreen = (props) => {
  const dispatch = useDispatch();
  const bus = useSelector((store) => store.fetchBus);
  const { loading, error, response } = bus;
  useEffect(() => {
    console.log("admin screen use effect called");
    dispatch(getBus());
  }, []);
  return (
    <div>
      <Header title="Scheduled Bus" />
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
              </tr>)
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminScreen;
