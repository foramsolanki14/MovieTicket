import {combineReducers, configureStore} from '@reduxjs/toolkit';
import bookingReducer from './bookingSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {persistStore} from 'redux-persist';

// Create the Redux store

const rootReducer = combineReducers({
  booking: bookingReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});
const persisteStore = persistStore(store);

export {store, persisteStore};
