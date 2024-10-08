/* eslint-disable no-unused-vars */
import axios from 'axios';

export async function createBooking(data, tourId) {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/v1/tours/${tourId}/booking`,
      data,
      {
        withCredentials: true // cho phép gửi thông tin xác thực như cookie hoặc header
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err.response ? err.response.data.message : err.message);
    throw err;
  }
}

export async function getMyBookings() {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/bookings/me`, {
      withCredentials: true
    });
    return response.data.data.booking;
  } catch (err) {
    console.log(err.response ? err.response.data.message : err.message);
    throw err;
  }
}

export async function getBookings() {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/bookings`, {
      withCredentials: true
    });
    return response.data.data.bookings;
  } catch (err) {
    console.log(err.response ? err.response.data.message : err.message);
    throw err;
  }
}

export async function deleteBooking(bookingId) {
  try {
    const response = await axios.delete(`http://localhost:3000/api/v1/bookings/${bookingId}`, {
      withCredentials: true // cho phép gửi thông tin xác thực như cookie hoặc header
    });
    return response.data;
  } catch (err) {
    console.log(err.response ? err.response.data.message : err.message);
    throw err;
  }
}

export async function getBooking(bookingId) {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/bookings/${bookingId}`, {
      withCredentials: true // cho phép gửi thông tin xác thực như cookie hoặc header
    });
    return response.data.data.booking;
  } catch (err) {
    console.log(err.response ? err.response.data.message : err.message);
    throw err;
  }
}

export async function updateBooking(BookingId, data) {
  try {
    const response = await axios.patch(`http://localhost:3000/api/v1/bookings/${BookingId}`, data, {
      withCredentials: true // cho phép gửi thông tin xác thực như cookie hoặc header
    });
    return response.data.data.booking;
  } catch (err) {
    console.log(err.response ? err.response.data.message : err.message);
    throw err;
  }
}
