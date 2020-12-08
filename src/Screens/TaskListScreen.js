/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,

} from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import {connect} from 'react-redux';
import  {deleteTask} from '../actions/yo';

class TaskListScreen extends Component {

  static navigationOptions = {
    title: 'My Tasks',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'green',
    },
  };


  render() {

    return (
    <FlatList style={styles.listContainer}
        data={this.props.tasks}
        keyExtractor={(item, index) => item.key.toString()}
        renderItem={
          (data) =>
            <ListItem
              title={data.item.name}
              bottomDivider
              rightIcon={<Icon
                name="Done"
                src = ".\src\Icon\icon.png"
                size={36}
                onPress={
                () => this.props.delete(data.item.key) } />
              }
            />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'black',
    padding: 16,
  },
  listText: {
    fontSize: 30,
  },
});

const mapStateToProps = (state) =>
{
return {
    tasks: state.TaskReducer.TaskList,
};
};

const mapDispatchToProps = (dispatch) =>
{
    return {
     delete : (key) => dispatch(deleteTask(key)),
    };

};
export default connect(mapStateToProps, mapDispatchToProps)(TaskListScreen);
