package com.app.service;

import java.util.List;

import com.app.dto.CustomDTO;
import com.app.dto.GetBookingListDTO;
import com.app.dto.PassengerDTO;

public interface IBookingService {
	void deleteBooking(int id);
	
	//method for getting booking by bus id
	List<PassengerDTO> getPassengerList(int busId);
	
	//method for updating booking
		String updateBooking(int busId);
		String postFeedback(int bid, String feedback);
		String bookTicket(CustomDTO custDto);
		List<GetBookingListDTO> findByBusId(int aid);
		List<GetBookingListDTO> findByUserId(int uid);
}
