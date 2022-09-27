package com.app.dto;

public class BusWiseRevenueDTO {
	private String busName;
	private double revenue;
	public BusWiseRevenueDTO() {
		// TODO Auto-generated constructor stub
	}
	public BusWiseRevenueDTO(String busName, double revenue) {
		super();
		this.busName = busName;
		this.revenue = revenue;
	}
	public String getbusName() {
		return busName;
	}
	public void setbusName(String busName) {
		this.busName = busName;
	}
	public double getRevenue() {
		return revenue;
	}
	public void setRevenue(double revenue) {
		this.revenue = revenue;
	}
	@Override
	public String toString() {
		return "BusWiseRevenue [busName=" + busName + ", revenue=" + revenue + "]";
	}
	
}
