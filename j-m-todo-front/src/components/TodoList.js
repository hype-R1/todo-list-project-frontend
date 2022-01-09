import { useState } from 'react'


function  Todolist({
    todos,
    onTodoDelete,
    onUpdateTodo,
    

}) {

    const [isEdit, setIsEdit] = useState(false);
    const [modTodo, setModTodo] = useState("");
    const [editTodoID, setEditTodoID] = useState("");

    

    function handleDeleteClick(e) {
        e.preventDefault();
        const id = e.target.value;
        fetch(`http://localhost:9292/todo/${id}`, {
          method: "DELETE",
        });
        onTodoDelete(id);
      }

      function handleEditMode(e) {
        e.preventDefault();
        setIsEdit(!isEdit);
        setEditTodoID(e.target.value);
      }

    console.log(editTodoID);
    console.log(modTodo);

      function handleEditTodo(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/todo/${editTodoID}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            body: modTodo,
          }),
        })
          .then((r) => r.json())
          .then((updatedTodo) => {
            setIsEdit(!isEdit);
            onUpdateTodo(updatedTodo);
          });
      }


    
}