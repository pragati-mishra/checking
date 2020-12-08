/* eslint-disable prettier/prettier */
import {createStore, combineReducers} from 'redux';
import TaskReducer from './reducers/TaskReducer';

const rootReducer = combineReducers(
    {
        TaskReducer:TaskReducer,
    }
); // index of reducer folder

const configureStore = () => createStore(rootReducer);

export default configureStore;

