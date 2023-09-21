import { csrfFetch } from "./csrf";


const DISPLAY_USER_BOOKINGS = "bookings/currentUserBookings";

export const getAllUserBookings = (bookings) => {
    return {
      type: DISPLAY_USER_BOOKINGS,
      bookings: bookings,
    };
  };




export const getUserBookings = () => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/current`, {
        method: "GET",
    });
    const data = await response.json();
    dispatch(getAllUserBookings(data));
    return response;
}


//creates a new booking based on spot id
export const createReservation = (payload) => async (dispatch) => {
    let { startDate, endDate, spotId } = payload
    let dates = { startDate, endDate}
    const response = await csrfFetch(`/api/spots/${spotId}/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dates),
    });
    if (response.ok) {
      const booking = await response.json()
      return booking;
    } else {
      console.log(response.errors)
    }
  }

  export const editBooking = (payload) => async (dispatch) => {
    let { startDate, endDate, bookingId } = payload
    let dates = { startDate, endDate}
    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dates),
    });
    if (response.ok) {
      const booking = await response.json()
      dispatch(getUserBookings());
      return booking;
    } else {
      console.log(response.errors)
    }
  }


  export const deleteBooking = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${payload}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      const booking = await response.json();
      dispatch(getUserBookings());
      return booking;
    }
  }
  const initialState = {
    userBookings: {
      //normalized kvps
    },

  };
  const bookingsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case DISPLAY_USER_BOOKINGS:
        newState = Object.assign({}, state);
        let newObject = {}
        action.bookings.Bookings ?
        action.bookings.Bookings.forEach(booking => {
          newObject[booking.id] = booking
        }) : newState = initialState
        newState.userBookings = newObject;
        return newState;
      default:
        return state;
    }
  };

  export default bookingsReducer
