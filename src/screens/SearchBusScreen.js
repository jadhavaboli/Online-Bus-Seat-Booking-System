import { Component } from "react";
import Header from "../components/Header";
import CitiesAPIService from "../service/CitiesAPIService";
import BusAPIService from "../service/BusAPIService";
import UserAPIService from "../service/UserAPIService";

export default class SearchBusScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      fromcity: "",
      toCity: "",
      departureDate: "",
      noOfPassengers: 0,
      passengers: [],
      bus: [],
      selectedSeatType: "",
      selectedBus: null,
      passengerType: "",
      passengerName: "",
      passengerAge: "",
      gender: "",
      seatNumber: "",
      passengerDto: [],
      way: "",
      baseFare: 0,
      taxes: 0,
      totalprice: 0,
      nameOnCard: "",
      cardNumber: "",
      expiryDate: "",
      cardDto: {},
      message: "",
      cvv:0
    };
    this.bookTicket = this.bookTicket.bind(this);
    this.confirmBooking = this.confirmBooking.bind(this);
  }
  componentDidMount() {
    this.loadCities();
  }

  loadCities() {
    CitiesAPIService.fetchCities().then((res) => {
      console.log(res);
      this.setState({
        cities: res.data.data,
      });
      console.log(this.state.cities);
    });
  }
  
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
   
  searchBus = (e) => {
    // var today = new Date(),
    // date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    console.log(
      "In clg " +
        this.state.fromcity +
        " " +
        this.state.toCity +
        " " +
        this.state.departureDate +
        "  " +
        this.state.selectedType +
        " " +
        this.state.noOfPassengers
    );
    e.preventDefault();
    console.log(new Date());
    if(!this.state.fromcity)
      this.setState({ fromcityError: "Please Select a City" });
    else this.setState({ fromcityError: "" });
    if(this.state.fromcity === this.state.toCity)
      this.setState({ toCityError: "Please Select different Cities" }); 
    else if(!this.state.toCity)
      this.setState({ toCityError: "Please Select a City" }); 
    else this.setState({ toCityError: "" });

    if(!this.state.departureDate)
      this.setState({ departureDateError: "Please select Journey Date" });
    else this.setState({ departureDateError: "" });

    if(!this.state.noOfPassengers)
      this.setState({ noOfPassengersError: "Please select number of Passengers" });
    else this.setState({ noOfPassengersError: "" });
    if(!this.state.selectedSeatType)
      this.setState({selectedSeatTypeError:"Please select seat type"});
    else this.setState({ selectedSeatTypeError: "" });
    
    if( !(this.state.fromcity === this.state.toCity) && this.state.fromcity && 
        this.state.toCity && 
        this.state.departureDate &&
        this.state.noOfPassengers &&
        this.state.selectedSeatType )  
    {
      BusAPIService.getBus(
        this.state.fromcity,
        this.state.toCity,
        this.state.departureDate
      ).then((res) => {
        console.clear()
        console.log(res.data);
        this.setState({
          bus: res.data,
          passengers: [],
          selectedBus: null,
        });
        console.log(this.state.bus);
      });
    }
  };

  bookTicket = (aid) => {
    BusAPIService.fetchBusById(aid).then((res) => {
      console.log(res);
      this.setState({ selectedBus: res.data.data, bus: [] });
      for (let i = 0; i < this.state.noOfPassengers; i++) {
        this.setState((prevState) => {
          return {
            passengers: [...prevState.passengers, i + 1],
          };
        });
      }
      let baseFare = 0;
      let taxes = 0;
      let totalprice = 0;
      console.log(this.state.selectedSeatType);
      if (this.state.selectedSeatType === "sleeper_SEAT_PRICE") {
        baseFare =
          this.state.selectedBus.sleeper_SEAT_PRICE * this.state.noOfPassengers;
        taxes = baseFare * 0.18;
        totalprice = baseFare + taxes;
      } else {
        baseFare =
          this.state.selectedBus.normal_SEAT_PRICE * this.state.noOfPassengers;
        taxes = baseFare * 0.18;
        totalprice = baseFare + taxes;
      }
      this.setState({
        baseFare: baseFare,
        taxes: taxes,
        totalprice: totalprice,
      });

      console.log(this.state.selectedBus);
      console.log("passengers array " + this.state.passengers);
    });
  };

  savePassenger = (i) => {
    console.log("here savepassenger" + this.state.passengerDto);
    if(this.state.passengerName.length <0)
      this.setState({ passengerNameError: "Please enter Name" });
    if(this.state.passengerName.length <3)
      this.setState({ passengerNameError: "Please enter a Valid Name" });
    else this.setState({ passengerNameError: "" });
    if(!this.state.passengerAge)
      this.setState({ passengerAgeError: "Please enter  Age" });
    else if(this.state.passengerAge <=0 )
      this.setState({ passengerAgeError: "Please enter  Age" });
    else this.setState({ passengerAgeError: "" });
    if(!this.state.gender)
      this.setState({ genderError: "Please select a gender" });
    else this.setState({ genderError: "" });
    if(this.state.passengerName.length >=3 &&
      this.state.passengerName &&
      this.state.passengerAge &&
      this.state.gender
    ){
    console.log("in save psgr "+this.state.passengerName+" "+
    this.state.passengerAge +" "+
    this.state.gender)
    const passengers = {
      passengerType: "ADULT",
      passengerName: this.state.passengerName,
      passengerAge: this.state.passengerAge,
      gender: this.state.gender,
      seatNumber: 200 - (this.state.selectedBus.availableSeats - i),
    };
    sessionStorage.setItem("passenger" + i, JSON.stringify(passengers));
    console.log(this.state.passengerDto);
    }
  };

  submitCardDetails = () => {
    if(!this.state.cardNumber )
      this.setState({cardNumberError:"Please enter card number"})
    else if(this.state.cardNumber.length >16 )
      this.setState({cardNumberError:"Please enter a valid card number"})
    else if(this.state.cardNumber.length <16 )
      this.setState({cardNumberError:"Please enter a valid card number"})
    else this.setState({ cardNumberError: "" });
    
    if(!this.state.nameOnCard)
      this.setState({nameOnCardError:"Please enter Name"})
    else this.setState({ nameOnCardError: "" });

    if(!this.state.expiryDate)
      this.setState({expiryDateError:"Please enter Expiry Date"})
    else this.setState({ expiryDateError: "" });

    if(!this.state.cvv)
      this.setState({cvvError :"Please enter cvv"})
    else if(this.state.cvv.length <3)
      this.setState({cvvError :"Please enter a Valid cvv"})
    else if(this.state.cvv.length >3)
      this.setState({cvvError :"Please enter a Valid cvv"})
    else this.setState({ cvvError: "" });  
    if(this.state.cardNumber && 
      this.state.cardNumber.length ===16 &&
      this.state.nameOnCard &&
      this.state.expiryDate &&
      this.state.cvv &&
      this.state.cvv.length ===3)
    {
    let card = {
      cardNumber: this.state.cardNumber,
      nameOnCard: this.state.nameOnCard,
      expiryDate: this.state.expiryDate,
    };
    sessionStorage.setItem("card", JSON.stringify(card));
    console.log(card);
    this.setState({ cardDto: card });
    console.log(this.state.cardDto);
    }
  };
  
  confirmBooking = () => {
    let i = 1;
    let j = 1;
    let pass = [];
    console.log("passenger" + i);
    console.log("no of pass : " + this.state.noOfPassengers);
    for (i = 0; i < this.state.noOfPassengers; i++) {
      let obj = JSON.parse(sessionStorage.getItem("passenger" + j));
      console.log(obj);
      pass.push(obj);
      j++;
    }
    console.log(pass);

    let card = JSON.parse(sessionStorage.getItem("card"));
    console.log(card);

    const booking = {
      totalprice: this.state.totalprice,
      seatType: this.state.selectedSeatType,
      status: 1,
      busId: this.state.selectedBus.id,
    };
    console.log(booking);
    const book = {
      userId: sessionStorage.getItem("userid"),
      cardDto: card,
      bookingDto: booking,
      passengerDto: pass,
    };
    console.log(book);

    UserAPIService.bookTicket(book).then((res) => {
      sessionStorage.removeItem("card");
      let k = 1;
      for (let l = 0; l < this.state.noOfPassengers; l++) {
        sessionStorage.removeItem("passenger" + k);
        k++;
      }
      this.setState({
        passengers: [],
        selectedBus: null,
        passengerName: "",
        passengerAge: "",
        gender: "",
        message: "bus booked Successfully"
      });
    });
  };
  render() {
    return (
      <div class="jumbotron1">
        <Header title="Search Bus" />
        <form>
          <p Style="color:green;">{this.state.message}</p>
          <div>
            <div class="row">
              <div class="col-6">
                <label for="fromcity">From</label>
                <select
                  id="fromcity"
                  class="form-control"
                  name="fromcity"
                  placeholder="select from city"
                  onChange={this.onChange}
                >
                 <option value="from" hidden selected>From</option>
                  {this.state.cities.map((city) => {
                    return <option value={city.city}>{city.city}</option>;
                  })}
                </select>
                <h6 className="text-danger text-center my-4">
                  {this.state.fromcityError}
                </h6>
              </div>
              <div class="col-6">
                <label for="toCity">Destination</label>
                <select
                  id="toCity"
                  class="form-control"
                  name="toCity"
                  placeholder="select from city"
                  onChange={this.onChange}
                >
                  <option value="destination" hidden selected>Destination</option>
                  {this.state.cities.map((city) => {
                    return <option value={city.city}>{city.city}</option>;
                  })}
                </select>
                <h6 className="text-danger text-center my-4">
                  {this.state.toCityError}
                </h6>
              </div>
            </div>
            <div class="row my-4">
              <div class="col-6">
                <label>Departure Date</label>
                <input
                  type="date"
                  class="form-control"
                  name="departureDate"
                  placeholder="Departure Date"
                  onChange={this.onChange}
                />
                <h6 className="text-danger text-center my-4">
                  {this.state.departureDateError}
                </h6>
              </div>
              <div class="col-6">
                <label>Passengers</label>
                <select
                  id="noOfPassengers"
                  class="form-control"
                  name="noOfPassengers"
                  placeholder="select Passengers"
                  onChange={this.onChange}
                >
                  <option value="select">Select Passengers</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
                <h6 className="text-danger  text-center my-4">
                  {this.state.noOfPassengersError}
                </h6>
              </div>
              <div class="col-6 my-4">
                <label class="">Type of Seat</label>
                <select
                  id="selectedType"
                  class="form-control"
                  name="selectedSeatType"
                  placeholder="select Type of Seat"
                  onChange={this.onChange}
                >
                  <option value="select" hidden selected>Select Type of Seat</option>
                  <option value="sleeper_SEAT_PRICE">SLEEPER_SEAT</option>
                  <option value="normal_SEAT_PRICE">NORMAL_SEAT</option>
                </select>
                <h6 className="text-danger  text-center my-4">
                  {this.state.selectedSeatTypeError}
                </h6>
              </div>
            </div>
            <button  className="btn btn-success" onClick={this.searchBus}>
              Search
            </button>
          </div>
        </form>
        {this.state.bus === "Currently No bus Available For this Route" &&
          <div className="bg-danger text-center my-4">"Currently No bus Available For this Route"</div>
        }
        {this.state.bus !=="Currently No bus Available For this Route" && this.state.bus.length > 0 && (
          <div className="my-4">
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
                  <th scope="col">sleeper_SEAT_PRICE</th>
                  <th scope="col">normal_SEAT_PRICE</th>
                  <th scope="col">Book Bus</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bus.map((Bus) => {
                  return (
                    <tr>
                      <td scope="row">{Bus.busName}</td>
                      <td>{Bus.busNo}</td>
                      <td>{Bus.fromCity}</td>
                      <td>{Bus.toCity}</td>
                      <td>{Bus.departureDate}</td>
                      <td>{Bus.arrivalDate}</td>
                      <td>{Bus.departureTime}</td>
                      <td>{Bus.arrivalTime}</td>
                      <td>{Bus.sleeper_SEAT_PRICE}</td>
                      <td>{Bus.normal_SEAT_PRICE}</td>
                      <td>
                        <button
                          className="btn btn-outline-danger "
                          onClick={() => {
                            this.setState({ selectedBusId: Bus.id });
                            this.bookTicket(Bus.id);
                          }}
                        >
                          {" "}
                          Book Bus
                        </button>
                      </td>
                    </tr>
                  );
                })}
        {/* {
          this.state.bus||<tr>
            <td>
              Bus in not available for this route
            </td>
          </tr>
        } */}
              </tbody>
            </table>
          </div>
        )}
        {this.state.passengers.length > 0 && (
          <div class="row-6" Style="align-self: center;">
            {this.state.passengers.map((i) => {
              //console.log(i);
              return (
                <div class="card text-center my-4" >
                  <div class="card-body">
                    <h6 class="card-title">Passenger {i} Details</h6>
                    {/* <form> */}
                    <div class="row-6">
                      <div class="col">
                        <label>Passenger Name</label>
                        <input
                          required
                          type="text"
                          class="form-control"
                          name="passengerName"
                          placeholder="Passenger Name"
                          onChange={this.onChange}
                        />
                        <h6 className="text-danger text-center my-4">
                            {this.state.passengerNameError}</h6>
                      </div>
                      <div class="col">
                        <label>Age</label>
                        <input
                          required
                          type="number"
                          class="form-control"
                          placeholder="Age"
                          name="passengerAge"
                          onChange={this.onChange}
                        />
                        <h6 className="text-danger text-center my-4">
                            {this.state.passengerAgeError}</h6>
                      </div>
                      <div class="col">
                        <label>Gender</label>
                        <select
                          required
                          class="form-control"
                          name="gender"
                          placeholder="select "
                          onChange={this.onChange}
                        >
                          <option value="select" hidden selected>Select Gender</option>
                          <option value="MALE">MALE</option>
                          <option value="FEMALE">FEMALE</option>
                          <option value="TRANSGENDER">TRANSGENDER</option>
                        </select>
                        <h6 className="text-danger text-center my-4">
                            {this.state.genderError}</h6>
                      </div>
                    </div>
                    <button
                      class="btn btn-primary my-4"
                      onClick={() => {
                        this.savePassenger(i);
                      }}
                    >
                      Save
                    </button>
                    {/* </form> */}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {this.state.selectedBus !== null && (
          <div class="row-6">
            <div class="card text-center my-4 col">
              <div class="card-header">Ticket Summary</div>
              <div class="card-body">
                <p class="card-text">
                  Bus Name: {this.state.selectedBus.busName}
                </p>
                <p class="card-text">
                  Route : {this.state.selectedBus.fromCity}---
                  {this.state.selectedBus.toCity}
                </p>
                <p class="card-text">Travellers: {this.state.noOfPassengers}</p>
                <p class="card-text">Base Fare : {this.state.baseFare}</p>
                <p class="card-text">Taxes : {this.state.taxes}</p>
                <p class="card-text">Total Price: {this.state.totalprice}</p>
              </div>
            </div>
            <div class="card text-center my-4 col">
              <div class="card-header">Enter Card Details</div>
              <div class="card-body">
                <p class="card-text"></p>
                <div class="row">
                  <div class="col">
                    <label>Name on Card</label>
                    <input
                      type="text"
                      class="form-control"
                      name="nameOnCard"
                      placeholder="nameOnCard"
                      onChange={this.onChange}
                    />
                    <h6 className="text-danger  text-center my-4">
                      {this.state.nameOnCardError}
                    </h6>  
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label>Card Number</label>
                    <input
                      type="text"
                      class="form-control"
                      name="cardNumber"
                      placeholder="Card Number"
                      onChange={this.onChange}
                    />
                    <h6 className="text-danger  text-center my-4">
                      {this.state.cardNumberError}
                    </h6> 
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label>Expiry Date</label>
                    <input
                      type="date"
                      class="form-control"
                      name="expiryDate"
                      placeholder="Expiry Date"
                      onChange={this.onChange}
                    />
                    <h6 className="text-danger  text-center my-4">
                      {this.state.expiryDateError}
                    </h6> 
                  </div>
                  <div class="col">
                    <label>CVV</label>
                    <input
                      type="number"
                      class="form-control"
                      name="cvv"
                      placeholder="cvv"
                      onChange={this.onChange}
                    />
                    <h6 className="text-danger  text-center my-4">
                      {this.state.cvvError}
                    </h6>
                  </div>
                </div>
                <button
                  class="btn btn-primary"
                  onClick={this.submitCardDetails}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        )}
        {this.state.selectedBus !== null && (
          <button onClick={this.confirmBooking} class="btn btn-info">
            Make Payment and Confirm Booking
          </button>
        )}
      </div>
    );
  }
}
