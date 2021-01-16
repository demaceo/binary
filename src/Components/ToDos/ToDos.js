import React from 'react'
import './ToDos.css';

export default function ToDos() {
    return (
      <div className="priorities-container center">
        <div className="priority">
          <div className="box center" style={{ backgroundColor: "#3C7FF2" }}>
            {/* <h1><b>Important<br />& <br />Urgent</b> </h1> */}
          </div>
          <div className="content center">
            <h1>Important & Urgent</h1>
            <p></p>
          </div>
        </div>
        <div className="priority">
          <div className="box center" style={{ backgroundColor: "#FBA260" }}>
            {/* <h1>Important<br /> <br />Not Urgent</h1> */}
          </div>
          <div className="content center">
            <h1>Important, Not Urgent</h1>
            <p></p>
          </div>
        </div>
        <div className="priority">
          <div className="box center" style={{ backgroundColor: "#8A78F0" }}>
            {/* <h1>Urgent <br /><br />Not Important</h1> */}
          </div>
          <div className="content center">
            <h1>Urgent, Not Important</h1>
            <p></p>
          </div>
        </div>
        <div className="priority">
          <div className="box center" style={{ backgroundColor: "#EE6C74" }}>
            {/* <h1>Not Important<br /><br /> Nor Urgent</h1> */}
          </div>
          <div className="content center">
            <h1>Not Important Nor Urgent</h1>
            <p></p>
          </div>
        </div>
      </div>
    );
}
