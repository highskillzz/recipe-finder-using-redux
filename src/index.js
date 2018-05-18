import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import rootReducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FavouriteRecipeList from './components/FavouriteRecipeList';


const store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(`store is ${JSON.stringify(store.getState(), null, 4)}`);

});


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={App}/>
    <Route exact path="/favourites" component={FavouriteRecipeList}/>
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
