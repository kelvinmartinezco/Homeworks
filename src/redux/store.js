import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

// Cambia esto:
// export const store = configureStore({

// Por esto:
const store = configureStore({
  reducer: {
    auth: authReducer
  }
});

// Exporta como default
export default store;