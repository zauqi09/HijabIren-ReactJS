import throttle from 'lodash.throttle';
import AllReducers from "../reducers"
import { createStore } from 'redux'


const loadState = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) return undefined
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn(e)
        return undefined;
    }
  }; 

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
    }  catch (e) {
        console.warn(e)
    }
  };

const persistedState = loadState();

const store = createStore(
    AllReducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000))

export default store