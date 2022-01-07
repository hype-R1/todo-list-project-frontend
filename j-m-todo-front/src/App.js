import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { useState } from "react";

function App() {


  const [todos, setTodos] =  useState([])

  fetch("http://localhost:9292/todo")
  .then(res => res.json)
  .then(todosData => setTodos(todosData))


  const taskList = todos.map(todos => (
    <Todo
        id={todos.id}
        name={todos.name}
        status={todos.status}
        key={todos.id}
      />
    )
  );
  return (
    <div className="todoapp stack-large">
      <h1>J & M 
        <ul>Todo List Project </ul>
      </h1>
        

      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">Things to do!</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;