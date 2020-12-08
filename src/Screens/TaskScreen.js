/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import  {addTask} from '../actions/yo';


class TaskScreen extends Component {

  static navigationOptions = {
    title: 'Pingg',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'blue',
    },
  };

  state = {
    task: null
}

  render() {
     return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Pinngg!!</Text>
        <TextInput
          value={this.state.task}
          placeholder="Enter New Task"
          style={styles.taskInput}
          onChangeText= { (task) => this.setState({task})}
        />
        <Button title="Add My Task"
          color="black"
          onPress={() =>{

             this.props.add(this.state.task);
             this.setState({task : null});
          }
        }
        />
        <Button
          title="My Tasks"
          onPress={() =>
            this.props.navigation.navigate('MyTasks')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 26,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 64,
    marginBottom: 48,

  },
  taskInput: {
    fontSize: 32,
    marginBottom: 32,
    borderWidth: 1,
    padding: 8,
    width: '80%',
    borderRadius: 10,
  },

});

const mapStateToProps = (state) =>
{
return {
    tasks: state.TaskReducer.TaskList
};
};

const mapDispatchToProps = (dispatch) =>
{
    return {
     add : (task) => dispatch(addTask(task))
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(TaskScreen);



