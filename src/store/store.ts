import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import  initialState from './initialState';


const persistedState = initialState;

const store = createStore(reducer, persistedState, composeWithDevTools()); 

// Cia kazka pratryniau sudinai. Reikia Store konfiguracija  pasiziureiti pagal Roko pavyzdi

export default store;
