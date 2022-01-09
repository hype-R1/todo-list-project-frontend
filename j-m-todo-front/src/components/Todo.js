import React from "react";


function Todo(todos) {
    return (
      <li className="todo stack-small">
       <div className="c-cb">
           <input id={todos.id} type="checkbox" defaultChecked={todos.status} />
           <label className="todo-label" htmlFor={todos.id}>
               {todos.name}
           </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">{todos.name}</span>
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">{todos.name}</span>
          </button>
        </div>
      </li>
    );
  }


  export default Todo;