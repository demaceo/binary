import "./NavBar.css";
import { useState, useRef, useEffect } from "react";
// import { solidGridIcon } from '../../Icons/MenuIcons.js';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Overlay, Button } from "react-bootstrap";
import AddToDo from '../AddToDo/AddToDo';

function NavBar() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    //const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
        return <AddToDo />
    };
  return (
    <div className="nav-container">
      <ul className="nav-bar">
        <li className="option">
          <i className="fa fa-home" aria-hidden="true"></i>
          <span className="option-text">Home</span>
        </li>
        <li className="option" onClick={handleClick}>
          <i className="fa fa-plus" aria-hidden="true"></i>
          <span className="option-text">Add</span>
        </li>
        <li className="option">
          <i className="fa fa-th-large" aria-hidden="true"></i>
          <span className="option-text">To-Dos</span>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
