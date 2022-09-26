import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import axiosMiddleware from "redux-axios-middleware";
import UserReducer  from './reducers/user';
import axios from 'axios';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
    user: UserReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
  };

const configureStore = () => {
 return createStore(
 rootReducer, //CombindReducers
 composeEnhancers(applyMiddleware(axiosMiddleware(axios), thunk))
 );
};

export {configureStore}