import CONSTANTS from './constants';
import initialData from './initialData';
import appReducer from './store/reducers';
import { createStore } from 'redux';
import {AddUser, DeleteUser } from './actions';

const store = createStore(appReducer, initialData);

console.log(store.getState())

store.dispatch(AddUser("Isabel", "isa@etours.ph"))

console.log(store.getState())

store.dispatch(DeleteUser("Isabel"))

console.log(store.getState())