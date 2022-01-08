import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { useState, useEffect } from "react";

function App() {


  const [todos, setTodos] =  useState([])

  useState(() => {
    fetch("http://localhost:9292/todos")
    .then((r) => r.json())
    .then((data) => setTodos(data));
}, []);


  const taskList = todos.map(todos => (
    <Todo
      name={todos.todo_name}
      id={todos.id}
      status={todos.status}
      key={todos.list_id}
        
      />
    )
  );

  const deleteTodos = (todo) => {
    fetch(`http://localhost:9292/todo/${todo.id}`, {method: "DELETE"})

    const revisedTodos = todos.filter(todo => todo.id ==! todo.id)
    setTodos(revisedTodos)
  }

  const createTodos = () => {
    
  }


  return (
    <div className="todoapp stack-large">
      <h1>J & M 
        <ul>Todo List Project </ul>
      </h1>
        

      <Form />
      <div className="filters btn-group stack-exception">
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