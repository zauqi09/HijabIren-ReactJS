import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from "./localStorage/store"
// import { createStore } from 'redux'
// import AllReducers from "./reducers"
// import throttle from 'lodash.throttle';
// import {loadState,saveState} from "./localStorage/localStorage"

// const persistedState = localStorage.getItem('reduxState') 
//                        ? JSON.parse(localStorage.getItem('reduxState'))
//                        : {}
// const store = createStore(
//   AllReducers,
//   persistedState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )


// store.subscribe(throttle(() => {
//     saveState({
//       todos: store.getState().todos
//     });
//   }, 1000));

// store.subscribe(throttle(()=>{
//   localStorage.setItem('initialState', JSON.stringify(store.getState()))
// },1000))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

