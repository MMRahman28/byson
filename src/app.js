//console.log("app.js is running.");
import React from 'react';
import ReactDOM from 'react-dom';

//import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
//import IndecisionApp from './components/IndecisionApp';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// import configureStore from './store/configureStore';
// import { addPoem } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
 import { startSetPoems } from './actions/poems';
 import 'normalize.css/normalize.css';
 import './styles/styles.scss';
 import 'react-dates/lib/css/_datepicker.css';
 import 'react-dates/initialize';
 import './firebase/firebase';




const store = configureStore();

//store.dispatch(addExpense({description: 'Water bill', amount: 4500 }));
// store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}));
// store.dispatch(addExpense({description: 'Rent', amount: 109500}));
// // store.dispatch(setTextFilter('water'));
// //
// // setTimeout (() => {
// //   store.dispatch(setTextFilter('bill'));
// // }, 3000)
//
const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetPoems()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
} );
