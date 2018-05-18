import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import rootReducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(`store is ${JSON.stringify(store.getState(), null, 4)}`);

});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
