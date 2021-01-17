import React from 'react'
import './ToDos.css';

export default function ToDos() {
    return (
      <div className="priorities-container center">
        <div className="priority">
          <div className="box center" style={{ backgroundColor: "#3C7FF2" }}>

          </div>
          <div className="content center">
            <h1>Important & Urgent</h1>
            <p></p>
          </div>
        </div>
        <div className="priority">
          <div className="box center" style={{ backgroundColor: "#FBA260" }}>

          </div>
          <div className="content center">
            <h1>Important, Not Urgent</h1>
            <p></p>
          </div>
        </div>
        <div className="priority">
          <div className="box center" style={{ backgroundColor: "#8A78F0" }}>
          </div>
          <div className="content center">
            <h1>Urgent, Not Important</h1>
            <p></p>
          </div>
        </div>
        <div className="priority">
          <div className="box center" style={{ backgroundColor: "#EE6C74" }}>
          </div>
          <div className="content center">
            <h1>Not Important Nor Urgent</h1>
            <p></p>
          </div>
        </div>
      </div>
    );
}
