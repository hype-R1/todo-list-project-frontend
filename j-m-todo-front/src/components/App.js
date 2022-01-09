import React from "react";
import Form from "./Form";
import FilterButton from "./FilterButton";
import Todo from "./Todo";
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
      key={todos.id}
        
      />
    )
  );

  // function handleUpdateTodo(updatedTodo) {
  //     const updatedTodoArray = todos.map((todo) => {
  //       if (todo.id === updatedTodo.id) {
  //         return updatedTodo;
  //       } else {
  //         return todo;
  //       }
  //     });
  //     setTodos(updatedTodoArray);
  //   }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

 


  return (
    <div className="todoapp stack-large">
      <h1 >
        
        J & M Todo List Project
        
      </h1>
        

      <Form />
      <div className="filters btn-group stack-exception">
       
      <FilterButton  />
      
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