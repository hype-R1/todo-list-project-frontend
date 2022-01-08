import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { useState, useEffect } from "react";

function App() {


  const [todos, setTodos] =  useState([])

  const fetchTodos = () =>{
    fetch("http://localhost:9292/todo")
  .then(res => res.json)
  .then(todosData => setTodos(todosData))
  };
  useEffect(fetchTodos, [])


  const deleteTodos = (todo) => {
    fetch(`http://localhost:9292/todo/${todo.id}`, {method: "DELETE"})

    const revisedTodos = todos.filter(todo => todo.id ==! todo.id)
    setTodos(revisedTodos)
  }

  const createTodos = () => {
    e.preventDefault()
    const formData = {name}

    fetch("http://localhost:9292/todo", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then((r) => r.json())
    .then((newTodos) => {
      onAddTodo(newTodos)
    }) 
  }

  const editTodos = () => {
    e.preventDefault()

    fetch(`http://localhost:9292/todo/${todo.id}`,{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(editedTodo),
    })
    todo.name = todoName 
    todo.status = false
  }


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