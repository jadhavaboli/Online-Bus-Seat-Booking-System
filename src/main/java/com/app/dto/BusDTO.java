package com.app.dto;

import java.time.LocalDate;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class BusDTO {
	private String busName;
	private String busNo;
	private LocalDate departureDate;
	private LocalDate arrivalDate;
	private String fromCity;
	private String toCity;
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", timezone = "Asia/Kolkata")
	private Date departureTime;
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", timezone = "Asia/Kolkata")
	private Date arrivalTime;
	private int capacity;
	private int availableSeats;
	private double SLEEPER_SEAT_PRICE;
	private double NORMAL_SEAT_PRICE;

	public BusDTO() {
		System.out.println("in ctor of : "+getClass().getName());
	}

	public BusDTO(String busName, String busNo, LocalDate departureDate, LocalDate arrivalDate,
			String fromCity, String toCity, Date departureTime, Date arrivalTime, int capacity, int availableSeats,
			double SLEEPER_SEAT_PRICE, double NORMAL_SEAT_PRICE) {
		super();
		this.busName = busName;
		this.busNo = busNo;
		this.departureDate = departureDate;
		this.arrivalDate = arrivalDate;
		this.fromCity = fromCity;
		this.toCity = toCity;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.capacity = capacity;
		this.availableSeats = availableSeats;
		this.SLEEPER_SEAT_PRICE = SLEEPER_SEAT_PRICE;
		this.NORMAL_SEAT_PRICE = NORMAL_SEAT_PRICE;
	}

	public String getbusName() {
		return busName;
	}

	public void setbusName(String busName) {
		this.busName = busName;
	}

	public String getbusNo() {
		return busNo;
	}

	public void setbusNo(String busNo) {
		this.busNo = busNo;
	}

	public LocalDate getDepartureDate() {
		return departureDate;
	}

	public void setDepartureDate(LocalDate departureDate) {
		this.departureDate = departureDate;
	}

	public LocalDate getArrivalDate() {
		return arrivalDate;
	}

	public void setArrivalDate(LocalDate arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

	public String getFromCity() {
		return fromCity;
	}

	public void setFromCity(String fromCity) {
		this.fromCity = fromCity;
	}

	public String getToCity() {
		return toCity;
	}

	public void setToCity(String toCity) {
		this.toCity = toCity;
	}

	public Date getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(Date departureTime) {
		this.departureTime = departureTime;
	}

	public Date getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(Date arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public int getAvailableSeats() {
		return availableSeats;
	}

	public void setAvailableSeats(int availableSeats) {
		this.availableSeats = availableSeats;
	}

	public double getSLEEPER_SEAT_PRICE() {
		return SLEEPER_SEAT_PRICE;
	}

	public void setSLEEPER_SEAT_PRICE(double SLEEPER_SEAT_PRICE) {
		this.SLEEPER_SEAT_PRICE = SLEEPER_SEAT_PRICE;
	}

	public double getNORMAL_SEAT_PRICE() {
		return NORMAL_SEAT_PRICE;
	}

	public void setNORMAL_SEAT_PRICE(double NORMAL_SEAT_PRICE) {
		this.NORMAL_SEAT_PRICE = NORMAL_SEAT_PRICE;
	}

	@Override
	public String toString() {
		return "AirlineDTO [busName=" + busName + ", busNo=" + busNo + ", departureDate="
				+ departureDate + ", arrivalDate=" + arrivalDate + ", fromCity=" + fromCity + ", toCity=" + toCity
				+ ", departureTime=" + departureTime + ", arrivalTime=" + arrivalTime + ", capacity=" + capacity
				+ ", availableSeats=" + availableSeats + ", SLEEPER_SEAT_PRICE=" + SLEEPER_SEAT_PRICE + ", NORMAL_SEAT_PRICE="
				+ NORMAL_SEAT_PRICE + "]";
	}
	
	
}
