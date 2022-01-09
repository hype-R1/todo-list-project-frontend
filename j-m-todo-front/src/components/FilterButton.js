import React from "react";

function FilterButton(props) {




  return (
    <button  type="ton" className="btn toggle-btn" aria-pressed="true" >
      <span className="visually-hidden">Show </span>
      <span > Sort </span>
      <span className="visually-hidden"> Todos</span>
    </button>
  );
}

export default FilterButton