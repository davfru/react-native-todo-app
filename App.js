import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  View
} from 'react-native';

//components
import Header from './components/Header';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';

export default function App() {

  const [term, setTerm] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = () => {

    if (term == undefined || term.length === 0) {
      return;
    }

    setTodoList([
      ...todoList,
      {
        id: new Date().getTime().toString(),
        title: term,
        done: false
      }]);

    setTerm("");

  }

  const toggleDone = (item) => {
    let updatedList = todoList;

    updatedList = updatedList.map(todo => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }

      return todo;
    });

    setTodoList(updatedList);
  }

  const removeTodo = (item) => {
    let updatedList = todoList;
    updatedList = updatedList.filter(todo => todo.id !== item.id);
    setTodoList(updatedList);
  }

  return (
    <View style={styles.container}>
      <Header/>
      <InputBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={addNewTodo}
      />
      <FlatList
        horizontal={false}
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TodoItem
              todoItem={item}
              toggleDone={() => toggleDone(item)}
              removeTodo={() => removeTodo(item)} />
          );
        }}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
