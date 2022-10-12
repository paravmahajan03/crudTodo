import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const List = () => {
  const getItems = JSON.parse(localStorage.getItem("list"));
  const [input, setInput] = useState("");
  const [list, setList] = useState(getItems ? getItems : []);
  const [itemEditing, setItemEditing] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) return;
    else if (!isEditing) {
      let newList = [{ value: input, completed: false }, ...list];
      setList(newList);
    } else {
      let { id } = itemEditing;
      let temp_list = [...list];
      temp_list[id] = { ...temp_list[id], value: input };

      setList(temp_list);
    }
    setInput("");
    setIsEditing(false);
    setItemEditing(null);
  };

  const handleEdit = (value, id) => {
    setInput(value);
    setIsEditing(true);
    setItemEditing({ value, id });
  };
  const handleDelete = (id) => {
    let items = (list) => {
      return list.filter((item, index) => {
        return index !== id;
      });
    };
    setList(items);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleCheckBox = (id) => {
    let temp_list = [...list];
    temp_list[id] = { ...temp_list[id], completed: !temp_list[id].completed };

    setList(temp_list);
  };

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("list"));
    setList(todos);
  }, []);

  return (
    <div>
      <div className="container-fluid my-3">
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Enter Todo Here"
          />
          {!isEditing ? (
            <button className="btn btn-outline-success" type="submit">
              Submit
            </button>
          ) : (
            <button className="btn btn-outline-success" type="submit">
              Edit
            </button>
          )}
        </form>
      </div>

      <div className=" border border-info mx-3 my-3 overlay">
        <ul className="list-group">
          {!list.length ? (
            <h5 className="mx-4 my-2 ">No Item Present</h5>
          ) : (
            list.map((todo, index) => (
              <TodoItem
                handleCheckBox={handleCheckBox}
                key={index}
                value={todo.value}
                checked={todo.completed}
                id={index}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default List;
