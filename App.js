/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskScreen from './src/Screens/TaskScreen';
import TaskListScreen from './src/Screens/TaskListScreen';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="Pinngg" component={TaskScreen} />
       <Stack.Screen name="MyTasks" component={TaskListScreen} />
       </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

export default App;

//static data in assest foders

// get the extensions