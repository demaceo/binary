import React from 'react'
import './ToDos.css';

function ToDos({todos, toggleComplete}) {
    const todoList = todos.map((todo) => {
        const getStyle = () => {
            return {
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed
                ? "rgba(255, 255, 255, 0.137)"
                : "white",
            };
        };
        if (todo.priority === "Important and Urgent") {
            return (
              <div className="priority">
                <div
                  className="box center"
                  style={{ backgroundColor: "#EE6C74" }}
                >
                  <input
                    type="checkbox"
                    onChange={toggleComplete(todo.id)}
                    className="toggle-complete"

                  />
                  <div className="content center" >
                    <h1>Important & Urgent</h1>

                    <p style={getStyle()}>{todo.title}</p>
                  </div>
                </div>
              </div>
            );
        } else if (todo.priority === "Important, Not Urgent") {
            return (
              <div className="priority">
                <div
                  className="box center"
                  style={{ backgroundColor: "#FBA260" }}
                >
                  <div className="content center">
                    <h1>Important, Not Urgent</h1>
                    <p>{todo.title}</p>
                  </div>
                </div>
              </div>
            );
        } else if (todo.priority === "Urgent, Not Important" ) {
            return (
              <div className="priority">
                <div
                  className="box center"
                  style={{ backgroundColor: "#3C7FF2" }}
                >
                <div className="content center">
                  <h1>Urgent, Not Important</h1>
                  <p>{todo.title}</p>
                </div>
                </div>
              </div>
            );
        } else {
            return(
              <div className="priority">
                <div
                  className="box center"
                  style={{ backgroundColor: "#8A78F0" }}
                >
                <div className="content center">
                  <h1>Not Important Nor Urgent</h1>
                  <p>{todo.title}</p>
                </div>
                </div>
              </div>
            )
        };
    })
    return (<div className="priority-container">{todoList}</div>);
};

export default ToDos;
