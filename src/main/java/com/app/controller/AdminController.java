package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.GetBookingListDTO;
import com.app.dto.PassengerDTO;
import com.app.dto.ResponseDTO;
import com.app.dto.UpdateBusDTO;
import com.app.service.IBusService;
import com.app.service.IBookingService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
	public AdminController() {
		System.out.println("in ctor of : " + getClass().getName());
	}
	@Autowired
	private IBookingService bookingService;
	
	@Autowired
	private IBusService busService;

	@PutMapping("/update_bus")
	public ResponseEntity<?> updateBusSchedule(@RequestBody UpdateBusDTO busDto) {
		System.out.println("in update bus Schedule method");
		return new ResponseEntity<>(busService.updateBus(busDto), HttpStatus.OK);
	}

	@DeleteMapping("/cancel_bus/{bus_id}")
	public ResponseEntity<?> cancelBus(@PathVariable int bus_id) {
		System.out.println("in cancel Bus Schedule method");
		return new ResponseEntity<>(new ResponseDTO<>("success", busService.cancelBus(bus_id)) , HttpStatus.OK);
	}
	
	@GetMapping("/get_bookings/{aid}")
	public ResponseEntity<?> getBookingsByAid(@PathVariable int aid){
		List<GetBookingListDTO> list = bookingService.findByBusId(aid);
		if (!list.isEmpty())
			return new ResponseEntity<>(new ResponseDTO<>("success", list), HttpStatus.OK);
		else
			return new ResponseEntity<>(new ResponseDTO<>("error", "no bookings yet"), HttpStatus.OK);
	}

	@DeleteMapping("/delete_booking")
	public ResponseEntity<?> deleteBooking(@RequestParam int bid) {
		System.out.println("in delete booking(admin controller) " + bid);

		bookingService.deleteBooking(bid);
		return new ResponseEntity<>("Booking Deleted Successfully!!!!", HttpStatus.OK);

	}
	
	@GetMapping("/passenger_list/{busId}")
	public ResponseEntity<?> passengerList(@PathVariable int busId) {
		System.out.println("in passenger List (admin controller) " + busId);
		List<PassengerDTO> list=bookingService.getPassengerList(busId);
		if(!list.isEmpty())
			return new ResponseEntity<>(new ResponseDTO<>("success", list), HttpStatus.OK);
		return new ResponseEntity<>(new ResponseDTO<>("error", "List is empty"), HttpStatus.OK);
	}

	@PutMapping("/update_booking/{busId}")
	public ResponseEntity<?> updateBooking(@PathVariable int busId){
		System.out.println("in update booking");
		return new ResponseEntity<>(bookingService.updateBooking(busId),HttpStatus.OK);
	}
	
	@GetMapping("/get_bus")
	public ResponseEntity<?> getAllBus(){
		return new ResponseEntity<>(new ResponseDTO<>("success", busService.getAllbuss()), HttpStatus.OK);
	}
}