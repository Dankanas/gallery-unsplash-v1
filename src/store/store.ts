import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import  initialState from './initialState';
import { reduxState } from '../constants/keys';


const persistedState = localStorage.getItem('reduxState')
? JSON.parse(localStorage.getItem(reduxState) || '{}') // Temp Fix
: initialState;

const store = createStore(reducer, persistedState, composeWithDevTools()); 

store.subscribe(()=>{
    localStorage.setItem(reduxState, JSON.stringify(store.getState()));
  });
// Cia kazka pratryniau sudinai. Reikia Store konfiguracija  pasiziureiti pagal Roko pavyzdi

export default store;
