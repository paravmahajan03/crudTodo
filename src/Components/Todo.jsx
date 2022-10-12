import React from "react";
import List from "./List";

const Todo = () => {
  return (
    <div className="main-container border border-info">
      <div className="container-fluid p-3 mb-2 bg-light text-dark border border-info">
        <h1>Todo App</h1>
      </div>
      <List />
    </div>
  );
};

export default Todo;
