package com.app.dto;

import java.time.LocalDate;

public class GetBookingListDTO {
	private int bookingId;
	private LocalDate bookingDate;
	private double totalPrice;
	private LocalDate journeyDate;
	private LocalDate arrivalDate;
	private int status;
	private int busId;
	private int userId;
	
	public GetBookingListDTO(int bookingId, LocalDate bookingDate, double totalPrice, LocalDate journeyDate,
			LocalDate arrivalDate, int status, int busId, int userId) {
		super();
		this.bookingId = bookingId;
		this.bookingDate = bookingDate;
		this.totalPrice = totalPrice;
		this.journeyDate = journeyDate;
		this.arrivalDate = arrivalDate;
		this.status = status;
		this.busId = busId;
		this.userId = userId;
	}

	public int getBookingId() {
		return bookingId;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
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

	public LocalDate getArrivalDate() {
		return arrivalDate;
	}

	public void setArrivalDate(LocalDate arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getbusId() {
		return busId;
	}

	public void setbusId(int busId) {
		this.busId = busId;
	}
	

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "GetBookingListDTO [bookingId=" + bookingId + ", bookingDate=" + bookingDate + ", totalPrice=" + totalPrice
				+ ", journeyDate=" + journeyDate + ", arrivalDate=" + arrivalDate + ", status=" + status
				+ ", busId=" + busId + "]";
	}
	
	
}
