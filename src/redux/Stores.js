import React from 'react';
// import {createStore} from 'redux';
import RootReducer from './RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
// const composeEnhancer = composeWithDevTools();
// const Stores = createStore(RootReducer,composeEnhancer);
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const Stores = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Stores
