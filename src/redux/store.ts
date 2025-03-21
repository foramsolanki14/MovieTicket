import {configureStore} from '@reduxjs/toolkit';
import bookingReducer from './bookingSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    booking: bookingReducer, // Add the booking slice reducer
  },
});

export default store;
