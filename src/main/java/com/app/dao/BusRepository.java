package com.app.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Bus;

public interface BusRepository extends JpaRepository<Bus, Integer> {
	//method to search Bus by from, destination and departureDate
	List<Bus> findByFromCityAndToCityAndDepartureDate(String fromCity, String toCity, LocalDate departureDate);
	
	//method to get distinct busNames
	@Query("select distinct busName from Bus")
	
	List<String> findDistinctByBusName();
}
