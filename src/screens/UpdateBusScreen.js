import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBus } from "../actions/busActions";
import Header from "../components/Header";

const UpdateBusScreen = (props) => {
  const dispatch = useDispatch();
  const bus = useSelector((store) => store.fetchBus);
  const { loading, error, response } = bus;

  useEffect(() => {
    dispatch(getBus());
  }, 
  []);

  const updatebus = (id) => {
    sessionStorage.setItem("aid", id);
    props.history.push("/update_bus_form");
  };
  return (
    <div>
      <Header title="Scheduled bus" />
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
              return (
                <tr>
                  <td scope="row">{bus.busName}</td>
                  <td>{bus.busNo}</td>
                  <td>{bus.fromCity}</td>
                  <td>{bus.toCity}</td>
                  <td>{bus.departureDate}</td>
                  <td>{bus.arrivalDate}</td>
                  <td>{bus.departureTime}</td>
                  <td>{bus.arrivalTime}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger "
                      onClick={() => updatebus(bus.id)}
                    >
                      {" "}
                      Update bus Schedule
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateBusScreen;
