// import { createStore } from 'redux';

import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; // Mute the state is allowed because of Redux using Lmer package, that clones the state.
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // state.counter = state.counter + action.amount;
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     // IMPORTANT: Never mutate the state. Instead overwrite the existing state object.
//     // state.counter++;
//     //return state;

//     // Working with Redux you always have to copy and create a new object
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterSlice.reducer); // Note: it can be only one reducer to createStore

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
  // reducer: {counter: counterSlice.reducer} // multiple reducers
});

// Methods automaticlly created by Redux Toolkit
// the key will create action objects
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
