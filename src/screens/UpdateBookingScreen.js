import React, { Component } from "react";
import BusAPIService from "../service/BusAPIService";

class UpdateBookingScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          bus: [],
          message: null,
        };
        this.updateBooking = this.updateBooking.bind(this);
    this.reloadBusList = this.reloadBusList.bind(this);
      }
      componentDidMount() {
        this.reloadBusList();
      }
      reloadBusList() {
          console.log(window.sessionStorage.getItem("aid"));
          BusAPIService.fetchBusById(window.sessionStorage.getItem("aid"))
            .then((res) => {
              console.log(res);
              if (res.data.status == "success")
                this.setState({ bus: res.data.data });
              else this.props.history.push("/admin");
              console.log(this.state.bus);
        });
      }
      updateBooking(aid) {
        console.log(aid);
        BusAPIService.updateBooking(aid).then((res) => {
          this.setState({ message: "Bookings updated successfully." });
        //   this.setState({
        //     bookings: this.state.bookings.filter((booking) => booking.bookingId !== bookingId),
        //   });
        // console.log(aid);
          this.props.history.push('/admin')
        });
      }
      render() {
        return (
          <div>
            <h2 className="text-center">Update Bookings</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="hidden">Bus Id</th>
                  <th>Bus Name</th>
                  <th>BusNumber</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Departure Date</th>
                  <th>Arrival Date</th>
                  <th>Departure Time</th>
                  <th>Arrival Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
          
                  <tr>
                    <td>{this.state.bus.busid}</td>
                    <td>{this.state.bus.busName}</td>
                    <td>{this.state.bus.busNo}</td>
                    <td>{this.state.bus.fromCity}</td>
                    <td>{this.state.bus.toCity}</td>
                    <td>{this.state.bus.departureDate}</td>
                    <td>{this.state.bus.arrivalDate}</td>
                    <td>{this.state.bus.departureTime}</td>
                    <td>{this.state.bus.arrivalTime}</td> 
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => this.updateBooking(this.state.bus.id)}
                      >
                        {" "}
                        Update All Bookings
                      </button>
                    </td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        );
      }
}
export default UpdateBookingScreen;