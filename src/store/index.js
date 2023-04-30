// import { createStore } from 'redux';

import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

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
  reducer: { counter: counterReducer, auth: authReducer },
  // reducer: {counter: counterSlice.reducer} // multiple reducers
});

// Methods automaticlly created by Redux Toolkit
// the key will create action objects

export default store;
