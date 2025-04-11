// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null
  },
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.user = action.payload;
      state.loading = false;
    },
    loginFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    logoutSuccess(state) {
      state.user = null;
    }
  }
});

// Exporta las acciones síncronas
export const { loginStart, loginSuccess, loginFailure, logoutSuccess } = authSlice.actions;

// Exporta las acciones asíncronas (DEBEN estar fuera de createSlice)
export const loginWithEmail = (email, password) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch(loginSuccess(userCredential.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const loginWithGoogle = () => async (dispatch) => {
  dispatch(loginStart());
  try {
    const result = await signInWithPopup(auth, googleProvider);
    dispatch(loginSuccess(result.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(logoutSuccess());
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

// Exporta el reducer
export default authSlice.reducer;