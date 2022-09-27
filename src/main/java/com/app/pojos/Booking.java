package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;
//@Getter
//@Setter
@Entity
@Table(name = "bookings")
public class Booking extends BaseEntity{
	private LocalDate bookingDate;
	private double totalPrice;
	private LocalDate journeyDate;
	private LocalDate arrivalDate;
	@Enumerated(EnumType.STRING)
	private SeatType seatType;
	//0-->cancelled, 1-->confirmed
	private int status;
	@Column(length = 1000)
	private String feedback;
	@Temporal(TemporalType.TIME)
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private java.util.Date departureTime;
	@Temporal(TemporalType.TIME)
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date arrivalTime;
	@OneToMany(mappedBy = "bookingId", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Passenger> passengerList = new ArrayList<Passenger>();
	private int busId;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User userId;
	
	public Booking() {
		System.out.println("in ctor of : "+getClass().getName());
	}

	public Booking(LocalDate bookingDate, double totalPrice, LocalDate journeyDate, SeatType seatType, int status,
			String feedback, int busId) {
		super();
		this.bookingDate = bookingDate;
		this.totalPrice = totalPrice;
		this.journeyDate = journeyDate;
		this.seatType = seatType;
		this.status = status;
		this.feedback = feedback;
		this.busId = busId;
	}
	public Booking(LocalDate bookingDate, double totalPrice, LocalDate journeyDate, LocalDate arrivalDate,
			SeatType seatType, int status, String feedback, Date departureTime, Date arrivalTime, int busId) {
		super();
		this.bookingDate = bookingDate;
		this.totalPrice = totalPrice;
		this.journeyDate = journeyDate;
		this.arrivalDate = arrivalDate;
		this.seatType = seatType;
		this.status = status;
		this.feedback = feedback;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.busId = busId;
	}
	
	public LocalDate getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(LocalDate bookingDate) {
		this.bookingDate = bookingDate;
	}

	public double gettotalPrice() {
		return totalPrice;
	}

	public void settotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public LocalDate getJourneyDate() {
		return journeyDate;
	}

	public void setJourneyDate(LocalDate journeyDate) {
		this.journeyDate = journeyDate;
	}

	public SeatType getSeatType() {
		return seatType;
	}

	public void setSeatType(SeatType seatType) {
		this.seatType = seatType;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	public List<Passenger> getPassengerList() {
		return passengerList;
	}

	public void setPassengerList(List<Passenger> passengerList) {
		this.passengerList = passengerList;
	}
	
	public int getBusId() {
		return busId;
	}

	public void setBusId(int busId) {
		this.busId = busId;
	}

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	public LocalDate getArrivalDate() {
		return arrivalDate;
	}

	public void setArrivalDate(LocalDate arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

	public java.util.Date getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(java.util.Date departureTime) {
		this.departureTime = departureTime;
	}

	public Date getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(Date arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	@Override
	public String toString() {
		return "Booking [bookingDate=" + bookingDate + ", totalPrice=" + totalPrice + ", journeyDate=" + journeyDate
				+ ", arrivalDate=" + arrivalDate + ", seatType=" + seatType + ", status=" + status + ", feedback="
				+ feedback + ", departureTime=" + departureTime + ", arrivalTime=" + arrivalTime + ", busId="
				+ busId + "]";
	}
	
	
}
