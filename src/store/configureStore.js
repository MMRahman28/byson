import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import poemsReducer from '../reducers/poems';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

// Store creation
export default () => {
    const store = createStore(
        combineReducers( {
          poems: poemsReducer,
        filters: filtersReducer

      }),
      composeEnhancers(applyMiddleware(thunk))


        // key is the state name and the value is the name of the reducer
                                  // that will manage the state
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  );

    return store;
};
