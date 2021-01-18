import React from 'react';
import './ToDo.css';

export default function Todo({id, title, priority, completed}) {
    return (
      <article className="todo" id={id}>
        <div className="todo-container center">
          <h3 className="todo-title">{title}</h3>
        </div>
      </article>
    );
}
