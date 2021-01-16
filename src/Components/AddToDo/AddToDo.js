import "./AddToDo.css";
import { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import { nanoid } from "nanoid";

function AddToDo(props) {
    const [toDo, setToDo] = useState('');
    const [priority, setPriority] = useState('"Important and Urgent"');
    const inputRef = useRef();

    const createNewTodo = () => {
        // inputRef.current.focus();
        // setToDo(inputRef.current.value);
        const newToDo = {
          id: nanoid(),
          title: inputRef.current.value,
          priority,
          completed: false,
        };
        props.addToDo(newToDo);
        inputRef.current.value = "";
        inputRef.current.placeholder = " Type your To-Do here...";
    }

    return (
      <div className="todo-form">
        <div>
          <input
            placeholder=" Type your To-Do here..."
            className="input-todo"
            ref={inputRef}
            value={toDo}
            id='textarea'
            onChange={(e) => setToDo(e.target.value)}
          />
        </div>
        <Form.Group
          className="dropdown-container"
          controlId="exampleForm.ControlSelect1"
        >
          {/* <Form.Label>Priority: </Form.Label> */}
          <Form.Control
            className="dropdown-menu"
            as="select"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Important and Urgent</option>
            <option>Important, Not Urgent</option>
            <option>Urgent, Not Important</option>
            <option>Not Important, Not Urgent</option>
          </Form.Control>
        </Form.Group>
        <div className="button-container">
          <button className="addButton" type="Submit" onClick={ createNewTodo }>
            Add
          </button>
        </div>
        {/* <div>To-Do: {toDo}</div> */}
        {/* <div> Previous To-Do: {prevToDo.current}</div> */}
        {/* <div>Render Count: {renderCount.count}</div> */}
      </div>
    );
}


export default AddToDo;