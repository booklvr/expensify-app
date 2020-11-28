import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";


const store = configureStore();

// getState();
// Returns the current state tree of your application.
//It is equal to the last value returned by the store's reducer.
// store.getState();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log("visible expenses", visibleExpenses);
});

store.dispatch(addExpense({ description: "Water Bill", amount: 4500 }));

store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));

store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));