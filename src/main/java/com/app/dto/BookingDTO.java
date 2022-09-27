package com.app.dto;

import com.app.pojos.SeatType;

public class BookingDTO {
	private double totalPrice;
	private SeatType seatType;
	private int status;
	private int busId;
	
	public BookingDTO() {
		System.out.println("in ctor of : "+getClass().getName());
	}

	public BookingDTO(double totalPrice, SeatType seatType, int status, int busId) {
		super();
		this.totalPrice = totalPrice;
		this.seatType = seatType;
		this.status = status;
		this.busId = busId;
	}

	public double gettotalPrice() {
		return totalPrice;
	}

	public void settotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
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

	public int getbusId() {
		return busId;
	}

	public void setbusId(int busId) {
		this.busId = busId;
	}

	@Override
	public String toString() {
		return "BookingDTO [totalPrice=" + totalPrice + ", seatType=" + seatType + ", status=" + status + ", busId="
				+ busId + "]";
	}

	
}
