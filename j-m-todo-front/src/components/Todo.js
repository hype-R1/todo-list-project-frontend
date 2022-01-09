import React from "react";


function Todo(todos) {

  const doSomething = e => {
    e.preventDefault();

      console.log("hi")
     // do something here
    }



  

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
        <button onClick={doSomething} type="button" className="btn btn__danger" >
            Delete <span className="visually-hidden">{todos.name}</span>
          </button>
        </div>
      </li>
    );
  }



  export default Todo;