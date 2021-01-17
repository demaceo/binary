import "./NavBar.css";
import { Link } from "react-router-dom";


function NavBar() {
  return (
      <div className="nav-container">
        <ul className="nav-bar">
          <Link to='/' className="option">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span className="option-text">Home</span>
          </Link>
          <Link to="/add" className="option">
            <i className="fa fa-plus" aria-hidden="true"></i>
            <span className="option-text">Add</span>
          </Link>
          <Link to="/toDos" className="option">
            <i className="fa fa-th-large" aria-hidden="true"></i>
            <span className="option-text">To-Dos</span>
          </Link>
        </ul>
      </div>
  );
}

export default NavBar;