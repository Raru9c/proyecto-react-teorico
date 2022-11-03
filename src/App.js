import React from 'react';
import { ToDoCounter } from './TodoDoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
//import './App.css';
import "./index.css"

const defaultTodos = [
  {text: 'Comprar comida', completed: true},
  {text: 'Comprar dolares', completed: true},
  {text: 'Comprar insumos', completed: false},
  {text: "Aprender React", completed: true}
];


function App() {

  const [todos, setTodo] = React.useState (defaultTodos);
  const [ searchValue, setSearchValue] = React.useState (""); 

  const completedTodos = todos.filter (todos => !!todos.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <React.Fragment>
    <ToDoCounter
    totalTodos={totalTodos}
    completed={completedTodos}
    />
    <TodoSearch
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
    />
    <TodoList>
     {searchedTodos.map (todo => (
      <TodoItem  
      key={todo.text}  
      text={todo.text}
      completed={todo.completed} />
     ))}
    </TodoList>
    <CreateTodoButton/>
    </React.Fragment>


    

  );
}

export default App;
