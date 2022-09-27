import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBus } from "../actions/busActions";
import Header from "../components/Header";

const GetPassengerListScreen = (props) => {
  const dispatch = useDispatch();
  const bus = useSelector((store) => store.fetchBus);
  const { loading, error, response } = bus;
  useEffect(() => {
    dispatch(getBus());
  }, []);
  const getList = (id) => {
    sessionStorage.setItem("busId", id);
    props.history.push("/list");
  };

  return (
    <div>
      {/* <Header title="Scheduled Flights" />
          <table class="table caption-top ">
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
                          onClick={() => getList(bus.id)}
                        >
                          {" "}
                           Get List
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table> */}
      <section class="content-info">
        <div class="container paddings-mini">
          <div class="row card-table table">
            <div class="col-xs-12 col-sm-12 col-md-12 ">
              <table class="table table-responsive table-hover result-point">
                <thead class="point-table-head">
                  <tr>
                    <th class="text-left">Bus Name</th>
                    <th class="text-left">Bus Number</th>
                    <th class="text-center">From</th>
                    <th class="text-center">To</th>
                    <th class="text-center">Departure Date</th>
                    <th class="text-center">Arrival Date</th>
                    <th class="text-center">Departure Time</th>
                    <th class="text-center">Arrival Time</th>
                    <th class="text-center">Action</th>
                   
                  </tr>
                </thead>
                <tbody class="text-center">
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
                          onClick={() => getList(bus.id)}
                        >
                          {" "}
                           Get List
                        </button>
                      </td>
                  </tr>
                  )})}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default GetPassengerListScreen;
