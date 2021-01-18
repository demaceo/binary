import "./AddToDo.css";
import { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const AddToDo = ({addToDo}) => {
  const [toDo, setToDo] = useState("");
  const [priority, setPriority] = useState('Important and Urgent');
  const inputRef = useRef('');

  const createNewTodo = () => {
    const newToDo = {
      id: nanoid(),
      title: toDo,
      priority,
      completed: false,
    };
    addToDo(newToDo);
    inputRef.current.value = "";
  };

  return (
    <div className="todo-form">
      <div>
        <input
          placeholder=" Type your To-Do here..."
          className="input-todo"
          ref={inputRef}
          id="textarea"
          onChange={(e) => setToDo(e.target.value)}
        />
      </div>
      <Form.Group
        className="dropdown-container"
        controlId="exampleForm.ControlSelect1"
      >
        <Form.Control
          className="dropdown-menu"
          as="select"
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Important & Urgent</option>
          <option>Important, Not Urgent</option>
          <option>Urgent, Not Important</option>
          <option>Not Important Nor Urgent</option>
        </Form.Control>
      </Form.Group>
      <div className="button-container">
        <button className="addButton" type="Submit" onClick={createNewTodo}>
          +
        </button>
      </div>
    </div>
  );
};

AddToDo.propTypes = {
  addToDo: PropTypes.func.isRequired,
};

export default AddToDo;