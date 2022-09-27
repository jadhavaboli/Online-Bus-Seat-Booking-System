import { Component } from "react";
import BusAPIService from "../service/BusAPIService";

export default class UpdateBusForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      departureTime: "",
      arrivalTime: "",
      departureDate: "",
      arrivalDate: "",
    };
  }
  componentDidMount() {
    this.loadBus();
  }

  loadBus() {
    BusAPIService.fetchBusById(window.sessionStorage.getItem("aid")).then(
      (res) => {
        let Bus = res.data.data;
        this.setState({
          id: Bus.id,
          departureTime: Bus.departureTime,
          arrivalTime: Bus.arrivalTime,
          departureDate: Bus.departureDate,
          arrivalDate: Bus.arrivalDate,
        });
      }
    );
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  saveBus = (e) => {
    e.preventDefault();
    let Bus = {
      id: this.state.id,
    departureTime: this.state.departureDate + ` ${this.state.departureTime}`,
      arrivalTime: this.state.arrivalDate + ` ${this.state.arrivalTime}`,
      departureDate: this.state.departureDate,
      arrivalDate: this.state.arrivalDate,
    };
    BusAPIService.editBus(Bus).then((res) => {
      this.setState({ message: "Bus rescheduled successfully." });
      this.props.history.push("/update_bookings");
    });
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Update Bus</h2>
        <div  className="icon d-flex align-items-center justify-content-center">
        <form>
          <div className="mb-3">
            <label>Bus ID:</label>
            <input
              type="text"
              placeholder="id"
              name="id"
              className="form-control"
              readonly="true"
              defaultValue={this.state.id}
            />
          </div>

          <div className="mb-3">
            <label>Departure Time:</label>
            <input
              placeholder="departureTime"
              name="departureTime"
              className="form-control"
              value={this.state.departureTime}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label>Arrival Time:</label>
            <input
              placeholder="arrivalTime"
              name="arrivalTime"
              className="form-control"
              value={this.state.arrivalTime}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label>Departure Date:</label>
            <input
              type="date"
              placeholder="departureDate"
              name="departureDate"
              className="form-control"
              value={this.state.departureDate}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label>Arrival Date:</label>
            <input
              type="date"
              placeholder="arrivalDate"
              name="arrivalDate"
              className="form-control"
              value={this.state.arrivalDate}
              onChange={this.onChange}
            />
          </div>

          <button className="btn btn-success" onClick={this.saveBus}>
            Save
          </button>
        </form>
        </div>
      </div>
    );
  }
}
