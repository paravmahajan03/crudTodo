import React from "react";

const TodoItem = ({ value, id, onDelete, onEdit, handleCheckBox, checked }) => {
  return (
    <div>
      <li
        key={id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <input
            checked={checked}
            type="checkbox"
            onChange={() => handleCheckBox(id)}
          />
          <span className={!checked ? "mx-2" : "line"}>{value}</span>
        </div>
        <div className="d-md-flex justify-content-md-end d-sm-flex justify-content-sm-end">
          <button
            onClick={() => {
              onEdit(value, id);
            }}
            className=" btn btn-primary me-md-2 me-sm-2"
            type="button"
          >
            Edit
          </button>
          <button
            onClick={() => {
              onDelete(id);
            }}
            className=" btn btn-primary"
            type="button"
          >
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
