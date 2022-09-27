package com.app.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BusRepository;
import com.app.dao.BookingRepository;
import com.app.dao.PassengerRepository;
import com.app.dto.BusDTO;
import com.app.dto.UpdateBusDTO;
import com.app.pojos.Bus;
import com.app.pojos.Booking;

@Service
@Transactional
public class BusServiceImpl implements IBusService {
	@Autowired
	private BusRepository busRepo;
	@Autowired
	private BookingRepository bookRepo;
	@Autowired 
	private PassengerRepository passRepo;
	@Override
	public Bus addBus(BusDTO Busdto) {
		System.out.println("in add Bus method");
		Bus Bus = new Bus();
		BeanUtils.copyProperties(Busdto, Bus);
		System.out.println("Bus dtls : " + Bus);
		return busRepo.save(Bus);
	}

	@Override
	public String updateBus(UpdateBusDTO flightDto) {
		System.out.println("in update Bus method");
		Bus a1 = busRepo.findById(flightDto.getId()).get();
		a1.setDepartureTime(flightDto.getDepartureTime());
		a1.setArrivalTime(flightDto.getArrivalTime());
		a1.setDepartureDate(flightDto.getDepartureDate());
		a1.setArrivalDate(flightDto.getArrivalDate());
		busRepo.save(a1);
		return "Bus updated Successfully!!!!";

	}
	
	@Override
	public String cancelBus(int airId) {
		System.out.println("in update Bus method");
		Bus a1 = busRepo.findById(airId).get();
		List<Booking> list=bookRepo.getBookingBybusId(airId);
		list.forEach((b)->{
			passRepo.deletePassengerByBookingId(b.getId());
			b.setStatus(0);
		});
		busRepo.delete(a1);
		return "Flight canceled Successfully!!!!";

	}

	@Override
	public List<Bus> searchBus(String fromCity, String toCity, LocalDate departureDate) {
		System.out.println(fromCity+toCity+departureDate);
		return busRepo.findByFromCityAndToCityAndDepartureDate(fromCity, toCity, departureDate);
		
	}

	@Override
	public Bus selectBusFromListById(int aid) {
		return busRepo.findById(aid).get();
	}

	@Override
	public List<Bus> getAllbuss() {
		
		return busRepo.findAll();
	}
	
	@Override
	public List<String> getBusNames() {
		return busRepo.findDistinctByBusName();
	}
}
