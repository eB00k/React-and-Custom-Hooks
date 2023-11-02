import React from "react";
import { ACTIONS } from "./UseReducerTodo";

export default function Todo({ todos, dispatch }) {
  return (
    <>
      <h3>Todo List:</h3>
      <div className="todo-list">
        {todos.map((todo) => (
          <div className="list-item" key={todo.id}>
            <span
              style={{
                color: todo.complete ? "#AAA" : "white",
                textDecoration: todo.complete ? "line-through" : "none",
              }}
            >
              {todo.name}
            </span>
            <div className="buttons">
              <button
                className="toggle-btn"
                onClick={() =>
                  dispatch({
                    type: ACTIONS.TOGGLE_TODO,
                    payload: { id: todo.id },
                  })
                }
              >
                TOGGLE
              </button>
              <button
                className="delete-btn"
                onClick={() =>
                  dispatch({
                    type: ACTIONS.DELETE_TODO,
                    payload: { id: todo.id },
                  })
                }
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
