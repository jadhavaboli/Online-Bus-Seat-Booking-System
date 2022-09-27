package com.app.pojos;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "Bus")
public class Bus extends BaseEntity {
	@Column(length = 30)
	private String busName;
	@Column(length = 30, unique = true)
	private String busNo;
	private LocalDate departureDate;
	private LocalDate arrivalDate;
	@Column(length = 30)
	private String fromCity;
	@Column(length = 30)
	private String toCity;
	@Temporal(TemporalType.TIME)
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private java.util.Date departureTime;
	@Temporal(TemporalType.TIME)
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date arrivalTime;
	private int capacity;
	private int availableSeats;
	private double sleeper_SEAT_PRICE;
	private double normal_SEAT_PRICE;
	public Bus() {
		System.out.println("in ctor of : "+getClass().getName());
	}
	public Bus(String busName, String busNo, LocalDate departureDate, LocalDate arrivalDate,
			String fromCity, String toCity, Date departureTime, Date arrivalTime, int capacity,
			int availableSeats, double sleeper_SEAT_PRICE, double normal_SEAT_PRICE) {
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
		this.sleeper_SEAT_PRICE = sleeper_SEAT_PRICE;
		this.normal_SEAT_PRICE = normal_SEAT_PRICE;
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
		return sleeper_SEAT_PRICE;
	}
	public void setSLEEPER_SEAT_PRICE(double sleeper_SEAT_PRICE) {
		this.sleeper_SEAT_PRICE = sleeper_SEAT_PRICE;
	}
	public double getNORMAL_SEAT_PRICE() {
		return normal_SEAT_PRICE;
	}
	public void setNORMAL_SEAT_PRICE(double normal_SEAT_PRICE) {
		this.normal_SEAT_PRICE = normal_SEAT_PRICE;
	}
	@Override
	public String toString() {
		return "BusId="+getId()+"busName=" + busName + ", busNo=" + busNo + ", departureDate=" + departureDate
				+ ", arrivalDate=" + arrivalDate + ", fromCity=" + fromCity + ", toCity=" + toCity + ", departureTime="
				+ departureTime + ", arrivalTime=" + arrivalTime + ", capacity=" + capacity + ", availableSeats="
				+ availableSeats + ", sleeper_SEAT_PRICE=" + sleeper_SEAT_PRICE + ", normal_SEAT_PRICE=" + normal_SEAT_PRICE + "]";
	}
	
}
