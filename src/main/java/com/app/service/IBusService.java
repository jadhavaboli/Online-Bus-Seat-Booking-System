package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.BusDTO;
import com.app.dto.UpdateBusDTO;
import com.app.pojos.Bus;

public interface IBusService {
	//method to add Bus
	Bus addBus(BusDTO Busdto);

	// method to update bus schedule
	String updateBus(UpdateBusDTO busDto);

	// method to cancel bus
	String cancelBus(int busId);
	
	//method to search bus
	List<Bus> searchBus(String fromCity, String toCity, LocalDate departureDate);
	
	//method to select Bus from Bus list --> Booking process
	Bus selectBusFromListById(int aid);
	
	//get all Bus
	List<Bus> getAllbuss();
	
	//method to get distinct BusNames
	List<String> getBusNames();
}
