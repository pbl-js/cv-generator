import { createStore } from "redux";
import personData from "redux/reducers/rootReducer";

const store = createStore(
  personData /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
