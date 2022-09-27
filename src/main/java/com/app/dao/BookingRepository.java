package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.dto.BusWiseRevenueDTO;
import com.app.dto.FeedbackDTO;
import com.app.dto.MonthlyRevenueDTO;
import com.app.dto.QuarterlyRevenueDTO;
import com.app.dto.YearlyRevenueDTO;
import com.app.pojos.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
	@Query("select new com.app.dto.MonthlyRevenueDTO(month(b.bookingDate),sum(b.totalPrice)) "
			+ "from Booking b inner join Bus a on a.id=b.busId where year(b.bookingDate)=year(current_date())"
			+ " and b.status=1 and a.busName=:nm group by month(b.bookingDate) order by month(b.bookingDate)")
	List<MonthlyRevenueDTO> getMonthlyRevenue(@Param("nm") String busName);
	
	@Query("select b from Booking b where b.busId=:id")
	List<Booking> getBookingBybusId(@Param("id") int busId);

	@Modifying
	@Query("Update Booking b set b.feedback=:fd where b.id=:bid")
	void postFeedback(@Param("bid") int bookingId, @Param("fd") String feedback);
	
	List<Booking> findByBusId(int busId);
	@Query("select b.busId from Booking b where b.id=:bid")
	int getbusIdByBookingId(@Param("bid")int bookingId);
	
	@Query("select new com.app.dto.FeedbackDTO(b.busId,b.id,b.userId.id,b.feedback) from Booking b where b.busId=:id")
	List<FeedbackDTO> getFeedbackBybusId(@Param("id") Integer busId);
	
	@Query("select new com.app.dto.QuarterlyRevenueDTO(quarter(b.bookingDate), sum(b.totalPrice)) "
			+ "from Booking b inner join Bus a on a.id=b.busId where year(b.bookingDate)=year(current_date) "
			+ "and b.status=1 and a.busName=:nm group by Quarter(b.bookingDate) order by Quarter(b.bookingDate)")
	List<QuarterlyRevenueDTO> getQuarterlyRevenue(@Param("nm") String busName);
	
	@Query("select new com.app.dto.YearlyRevenueDTO(year(b.bookingDate), sum(b.totalPrice)) from Booking b inner join Bus a on a.id=b.busId where status=1 and a.busName=:nm group by year(b.bookingDate) order by year(b.bookingDate)")
	List<YearlyRevenueDTO> getYearlyRevenue(@Param("nm") String busName);
    
	@Query("select b from Booking b where b.userId.id=:id")
	List<Booking> getBookingByUserId(@Param("id") int userId);
	
	@Query("select count(b.id) from Booking b ")
	int getTotalBooking();
	
	@Query("select count(b.id) from Booking b where status=0")
	int getCancelledBooking();
	
	@Query("select sum(b.totalPrice) from Booking b where status=1")
	double getTotalRevenue();
	
	@Query("select new com.app.dto.BusWiseRevenueDTO(a.busName,sum(b.totalPrice)) from Booking b inner join Bus a on a.id=b.busId where b.status=1 group by a.busName")
	List<BusWiseRevenueDTO> getBusRevenue();
}