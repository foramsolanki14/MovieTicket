import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  movie: {},
  selectedSeats: [],
  selectedDate: null,
  selectedTime: '',
  totalPrice: 0,
  userEmail: '',
  userContactNumber: '',
  theaterName: '',
  selectedSeatsCount: 0,
  ScreenName: '',
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookingDetails: (state, action) => {
      state.movie = action.payload.movie;
      state.selectedSeats = action.payload.selectedSeats;
      state.selectedDate = action.payload.selectedDate.toISOString();
      state.selectedTime = action.payload.selectedTime;
      state.totalPrice = action.payload.totalPrice;
      state.userEmail = action.payload.userEmail;
      state.userContactNumber = action.payload.userContactNumber;
      state.theaterName = action.payload.theaterName;
      state.selectedSeatsCount = action.payload.selectedSeatsCount;
      state.ScreenName = action.payload.ScreenName;
    },
  },
});

export const {setBookingDetails} = bookingSlice.actions;
export default bookingSlice.reducer;
