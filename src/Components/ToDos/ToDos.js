import React from 'react'
import './ToDos.css';
import { useState, useEffect, useRef } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

function ToDos() {
    let category = "Important & Urgent";
    let categoryRef = useRef('');
   const updateCategory = (cat) => {
        category = cat;
    }
    return (
      <div className="priorities-container center">
        <Link to={`/category/${category}`} className="priority">
          <div
            className="box center"
            style={{ backgroundColor: "#3C7FF2" }}
            onMouseOver={updateCategory("Important & Urgent")}
          ></div>
          <div className="content center">
            <h1>Important & Urgent</h1>
          </div>
        </Link>
        <Link to={`/category/${category}`} className="priority">
          <div
            className="box center"
            style={{ backgroundColor: "#FBA260" }}
            onMouseOver={updateCategory("Important, Not Urgent")}
          ></div>
          <div className="content center">
            <h1>Important, Not Urgent</h1>
          </div>
        </Link>
        <Link
          to={`/category/${category}`}
          className="priority"
        >
          <div
            className="box center"
            style={{ backgroundColor: "#8A78F0" }}
            onMouseOver={updateCategory("Urgent, Not Important")}
          ></div>
          <div className="content center">
            <h1>Urgent, Not Important</h1>
          </div>
        </Link>
        <Link to={`/category/${category}`} className="priority">
          <div
            className="box center"
            style={{ backgroundColor: "#EE6C74" }}
            onMouseOver={updateCategory("Not Important Nor Urgent")}
         
          ></div>
          <div className="content center">
            <h1>Not Important Nor Urgent</h1>
          </div>
        </Link>
      </div>
    );
};

export default ToDos;
