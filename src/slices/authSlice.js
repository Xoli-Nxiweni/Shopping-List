// import { createSlice } from '@reduxjs/toolkit';

// // Load initial user data from localStorage and handle errors
// const loadInitialUser = () => {
//   try {
//     const user = JSON.parse(localStorage.getItem('user'));
//     return user || null;
//   } catch (error) {
//     console.error('Failed to load user from localStorage:', error);
//     return null;
//   }
// };

// const initialState = {
//   user: loadInitialUser(),
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       try {
//         state.user = action.payload;
//         localStorage.setItem('user', JSON.stringify(action.payload));
//       } catch (error) {
//         console.error('Failed to save user to localStorage:', error);
//       }
//     },
//     logout: (state) => {
//       state.user = null;
//       localStorage.removeItem('user');
//     },
//     updateUser: (state, action) => {
//       if (state.user) {
//         state.user = { ...state.user, ...action.payload };
//         try {
//           localStorage.setItem('user', JSON.stringify(state.user));
//         } catch (error) {
//           console.error('Failed to update user in localStorage:', error);
//         }
//       }
//     },
//   },
// });

// export const { login, logout, updateUser } = authSlice.actions;
// export default authSlice.reducer;

// // authSlice.js0

// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    status: 'idle', // could be 'idle', 'loading', 'succeeded', or 'failed'
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.status = 'succeeded';
    },
    logout: (state) => {
      state.user = null;
      state.status = 'idle';
      localStorage.removeItem('user'); // Clear user from localStorage
    },
    setLoading: (state) => {
      state.status = 'loading';
    },
    setError: (state) => {
      state.status = 'failed';
    }
  }
});

export const { login, logout, setLoading, setError } = authSlice.actions;

export default authSlice.reducer;
