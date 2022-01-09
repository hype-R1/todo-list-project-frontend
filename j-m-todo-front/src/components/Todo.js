import React from "react";


function Todo(todos, todo , setTodos) {

  const doSomething = e => {
    e.preventDefault();

      console.log("hi")
     // do something here
    }
    const handleDelete = () => {
      const revisedTodos = todos.filter(todo => todo.id ==! todo.id)
      setTodos(revisedTodos)
      const config = {
        method: "DELETE",  
        "Accepts": "application/json"
      }
      fetch(`http://localhost:9292/todo/${todo.id}`, config)
    }
  
    // const onDelete = () => {
    //   handleDelete(todos.id)
    //   const config = {
    //     method: "DELETE",  
    //     "Accepts": "application/json"
    //   }
    //   fetch(`http://localhost:9292/todo/${todo.id}`, config)
    // }
    // const deleteTodos = (todo) => {
    //   fetch(`http://localhost:9292/todo/${todo.id}`, {method: "DELETE"})
  
    //   const revisedTodos = todos.filter(todo => todo.id ==! todo.id)
    //   setTodos(revisedTodos)
    // }


  

    return (
      <li className="todo stack-small">
       <div className="c-cb">
           <input id={todos.id} type="checkbox" defaultChecked={todos.status} />
           <label className="todo-label" htmlFor={todos.id}>
               {todos.name}
           </label>
        </div>
        <div className="btn-group">
          <button onClick={doSomething} type="button" className="btn" >
            Edit <span className="visually-hidden">{todos.name}</span>
          </button>
        <button onClick={handleDelete} type="button" className="btn btn__danger" >
            Delete <span className="visually-hidden">{todos.name}</span>
          </button>
        </div>
      </li>
    );
  }



  export default Todo;