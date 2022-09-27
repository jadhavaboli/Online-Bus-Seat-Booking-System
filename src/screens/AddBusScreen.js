import { Component } from "react";
//import FlightAPIService from "../service/FlightAPIService";
import BusAPIService from "../service/BusAPIService";
export default class UpdateBusForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busName: "",
      busNo: "",
      departureDate: "",
      arrivalDate: "",
      fromCity: "",
      toCity: "",
      departureTime: "",
      arrivalTime: "",
      capacity: 0,
      availableSeats: 0,
      sleeper_SEAT_PRICE: 0.0,
      normal_SEAT_PRICE: 0.0,
      nameError: "",
      numberError: "",
      departureDateError: "",
      arrivalDateError: "",
      fromCityError: "",
      toCityError: "",
      departureTimeError: "",
      arrivalTimeError: "",
      capacityError: "",
      availableSeatsError: "",
      sleeper_SEAT_PRICE: "",
      normal_SEAT_PRICE: "",
    };
    this.addBus = this.addBus.bind(this);
  }
  componentDidMount() {}

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  addBus = (e) => {
    e.preventDefault();
    if (!this.state.busName)
      this.setState({ nameError: "Bus Name required!!!!!" });
    else this.setState({ nameError: "" });
    if (!this.state.busNo)
      this.setState({ numberError: "Bus Number required!!!!!" });
    else this.setState({ numberError: "" });
    if (!this.state.departureDate)
      this.setState({ departureDateError: "Departure Date required!!!!!" });
    else this.setState({ departureDateError: "" });
    if (!this.state.arrivalDate)
      this.setState({ arrivalDateError: "Arrival Date required!!!!!" });
    else this.setState({ arrivalDateError: "" });
    if (!this.state.fromCity)
      this.setState({ fromCityError: "From city required!!!!!" });
    else this.setState({ fromCityError: "" });
    if (!this.state.toCity)
      this.setState({ toCityError: "To city required!!!!!" });
    else this.setState({ toCityError: "" });
    if (!this.state.departureTime)
      this.setState({ departureTimeError: "Departure time required!!!!!" });
    else this.setState({ departureTimeError: "" });
    if (!this.state.arrivalTime)
      this.setState({ arrivalTimeError: "Arrival time required!!!!!" });
    else this.setState({ arrivalTimeError: "" });
    if (!this.state.capacity)
      this.setState({ capacityError: "Capacity required!!!!!" });
    else this.setState({ capacityError: "" });
    if (!this.state.sleeper_SEAT_PRICE)
      this.setState({ sleeper_SEAT_PRICE: "Sleeper Seat Price required!!!!!" });
    else this.setState({ sleeper_SEAT_PRICE: "" });
    if (!this.state.normal_SEAT_PRICE)
      this.setState({ normal_SEAT_PRICE: "Normal Seat Price required!!!!!" });
    else this.setState({ normal_SEAT_PRICE: "" });
    if (
      this.state.busName &&
      this.state.busNo &&
      this.state.arrivalDate &&
      this.state.departureDate &&
      this.state.fromCity &&
      this.state.toCity &&
      this.state.departureTime &&
      this.state.arrivalTime &&
      this.state.capacity &&
      this.state.sleeper_SEAT_PRICE &&
      this.state.normal_SEAT_PRICE
    ) {
      let cities={
        cityNames:[this.state.fromCity,this.state.toCity]
      };
      BusAPIService.addCities(cities).then((res) => {
        console.log("in add Cities");
      });
      let bus = {
        busName: this.state.busName,
        busNo: this.state.busNo,
        departureDate: this.state.departureDate,
        arrivalDate: this.state.arrivalDate,
        fromCity: this.state.fromCity,
        toCity: this.state.toCity,
        departureTime:
          this.state.departureDate + ` ${this.state.departureTime}`,
        arrivalTime: this.state.arrivalDate + ` ${this.state.arrivalTime}`,
        capacity: this.state.capacity,
        availableSeats: this.state.capacity,
        sleeper_SEAT_PRICE: this.state.sleeper_SEAT_PRICE,
        normal_SEAT_PRICE: this.state.normal_SEAT_PRICE,
      };
      BusAPIService.addBus(bus).then((res) => {
        this.setState({ message: "bus Added successfully." });
        this.props.history.push("/superadmin");
      });
    }
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Add Bus</h2>
        <div className="icon d-flex align-items-center justify-content-center">
          <form>
            <div className="mb-3">
              <label>Bus Name</label>
              <input
                type="text"
                placeholder="busName"
                name="busName"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.nameError}
              </h6>
            </div>

            <div className="mb-3">
              <label>Bus Number</label>
              <input
                type="text"
                placeholder="busNo"
                name="busNo"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.numberError}
              </h6>
            </div>

            <div className="mb-3">
              <label>Departure Date</label>
              <input
                type="date"
                placeholder="departureDate"
                name="departureDate"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.departureDateError}
              </h6>
            </div>

            <div className="mb-3">
              <label>Arrival Date</label>
              <input
                type="date"
                placeholder="arrivalDate"
                name="arrivalDate"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.arrivalDateError}
              </h6>
            </div>
            <div className="mb-3">
              <label>From City</label>
              <input
                type="text"
                placeholder="fromCity"
                name="fromCity"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.fromCityError}
              </h6>
            </div>
            <div className="mb-3">
              <label>To City</label>
              <input
                type="text"
                placeholder="toCity"
                name="toCity"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.toCityError}
              </h6>
            </div>
            <div className="mb-3">
              <label>Departure Time[24 hrs format]</label>
              <input
                type="text"
                placeholder="00:00:00"
                name="departureTime"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.departureTimeError}
              </h6>
            </div>
            <div className="mb-3">
              <label>Arrival Time[24 hrs format]</label>
              <input
                type="text"
                placeholder="00:00:00"
                name="arrivalTime"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.arrivalTimeError}
              </h6>
            </div>
            <div className="mb-3">
              <label>Capacity</label>
              <input
                type="number"
                placeholder="capacity"
                name="capacity"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.capacityError}
              </h6>
            </div>
            <div className="mb-3">
              <label>sleeper_SEAT_PRICE</label>
              <input
                type="number"
                placeholder="sleeper_SEAT_PRICE"
                name="sleeper_SEAT_PRICE"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.sleeper_SEAT_PRICE}
              </h6>
            </div>
            <div className="mb-3">
              <label>normal_SEAT_PRICE</label>
              <input
                type="number"
                placeholder="normal_SEAT_PRICE"
                name="normal_SEAT_PRICE"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.normal_SEAT_PRICE}
              </h6>
            </div>
            <button className="btn btn-primary" onClick={this.addBus}>
              Add Bus
            </button>
          </form>
        </div>
      </div>
    );
  }
}
