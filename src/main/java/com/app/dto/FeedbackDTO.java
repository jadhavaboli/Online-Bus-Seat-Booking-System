package com.app.dto;

public class FeedbackDTO {
	private int busId;
	private int bookingId;
	private int userId;
	private String feedback;
	public FeedbackDTO() {
		// TODO Auto-generated constructor stub
	}
	public FeedbackDTO(int busId, int bookingId, int userId, String feedback) {
		super();
		this.busId = busId;
		this.bookingId = bookingId;
		this.userId = userId;
		this.feedback = feedback;
	}
	
	public int getbusId() {
		return busId;
	}
	public void setbusId(int busId) {
		this.busId = busId;
	}
	public int getBookingId() {
		return bookingId;
	}
	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	@Override
	public String toString() {
		return "FeedbackDTO [busId=" + busId + ", bookingId=" + bookingId + ", userId=" + userId + ", feedback="
				+ feedback + "]";
	}
	
}
