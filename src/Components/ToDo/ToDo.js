import React from 'react';
import './ToDo.css';
import PropTypes from "prop-types";


function Todo({id, title}) {
    return (
      <article className="todo" id={id}>
        <div className="todo-container center">
          <h3 className="todo-title">{title}</h3>
        </div>
      </article>
    );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};


export default Todo;


