package com.app.custom_exceptions;

public class BusNotFoundException extends RuntimeException{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public BusNotFoundException(String msg) {
		super(msg);
	}
}
