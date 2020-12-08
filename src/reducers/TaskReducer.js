/* eslint-disable prettier/prettier */
import { Alert } from 'react-native';
import { ADD_TASK, DELETE_TASK } from '../actions/actiontypes';

const initalState = {
    TaskList :[],
}; //capital letter for components '

const TaskReducer = (state = initalState, action) =>
{
    switch (action.type){

        case ADD_TASK:
            Alert.alert('Task Added Successfully');
         return {
             ...state,
             TaskList :state.TaskList.concat({
             key : Math.random(),
             name : action.data,
             }),
            };

            /* {
          ...state,
          TaskList: [
            ...TaskList,
            {
              key: Math.random(),
              name: action.data
            }
          ]
        } */

        // use payload
        
        case DELETE_TASK:
            return {
                ...state,
                 TaskList: state.TaskList.filter((item) =>
                  item.key !== action.key),
                };
        default:
            return state;

    }
};

export default TaskReducer;
