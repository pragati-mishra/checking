/* eslint-disable prettier/prettier */
import {ADD_TASK, DELETE_TASK} from './actiontypes';

export const addTask = (task) => (
{
    type : ADD_TASK,
    data : task,
}
);

export const deleteTask = (key) => (
    {
        type : DELETE_TASK,
        key  : key,
    }
    );
