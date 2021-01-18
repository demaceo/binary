import "./AddToDo.css";
import { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { useLocalStorage } from "../../utilities/useLocalStorage";

const AddToDo = () => {
  const [toDo, setToDo] = useState("");
  const [todos, setTodos] = useState([]);
  const [priority, setPriority] = useState('Important and Urgent');
  const inputRef = useRef('');
  const [localStorage, setLocalStorage] = useLocalStorage("toDos");

useEffect(() => { 
    let storedToDos = localStorage;
    storedToDos = storedToDos ? storedToDos : [];
    setTodos(storedToDos);
  }, []);

  const createNewTodo = () => {
    const newToDo = {
      id: nanoid(),
      title: toDo,
      priority,
      completed: false,
    };
    console.log(newToDo);
    addToDo(newToDo);
    inputRef.current.value = "";
  };

  const addToDo = (newToDo) => {
    // const newToDo = {
    //     id: nanoid(),
    //     title: toDo,
    //     priority,
    //     completed: false,
    // };
    if (!todos.length) {
      setTodos([newToDo]);
      setLocalStorage(todos);
    } else {
      setTodos([newToDo, ...todos]);
      setLocalStorage([newToDo, ...todos]);
    }
    // inputRef.current.value = "";
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

// AddToDo.propTypes = {
//   addToDo: PropTypes.func.isRequired,
//   setPriorityLevel: PropTypes.func.isRequired,
// };

export default AddToDo;