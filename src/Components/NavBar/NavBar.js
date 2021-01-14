import "./NavBar.css";
import { useState, useRef, useEffect } from "react";
import { solidGridIcon } from '../../Icons/MenuIcons.js';

function NavBar() {
  const bubbleRef = useRef();
  const tabRef = useRef();
  const tabsRef = useRef();

    // const mouseOver = (event) => {
    //   event.target.classList.add('hover');
    //   return {
    //     left: event.traget.offsetLeft + "px"
    //   };
    // };

    // const mouseLeave = () => {
    //     return {
    //     transition: 'transform 200ms ease-out',
    //     transform:'scale(1,0) translateX(-25%)'
    //     }
    // };

    // const mouseOut = (event) => {
    //     event.target.classList.remove("hover")
    // };

    // const mouseEnter = (event) => {
    //         setTimeout(
    //             () =>
    //             ( {
    //                 transition: "transform 200ms ease-out, left 300ms ease-out"
    //             }),
    //             5
    //         );
    //         return {
    //             transform: "scale(1,1) translateX(-25%)"
    //         }
    // }

  return (
    <div className="nav-container">
      <div className="bubble-container">
        <svg

          className="bubble"
        //   onMouseOver={mouseOver}
        //   onMouseEnter={mouseEnter}
        //   onMouseLeave={mouseLeave}
        //   onMouseOut={mouseOut}
          xmlns="http://www.w2.org/2000/svg"
          viewBox="0 0 493.99 107.9"
          preserveAspectRatio="none"
        >
          <path
            className="bubble-path"
            d="M492.24,104.4c-34.4,0-67.6-2.55-98.76-18.51C342.17,59.61,329.28,14.94,270,2.79h0A141.58,141.58,0,0,0,244.75,0a141.58,141.68,0,0,0-25.23,2.78h-.05C160.22,14.94,147.33,59.61,96,85.89a172.18,172.18,0,0,1-49.16,16.37c-15,2.57-30,2.14-45.11,2.14a1.75,1.75,0,0,0,0,3.5H492.24a1.75,1.75,0,0,0,0-3.5Z"
          />
        </svg>
      </div>
      <ul className="tabs">
        <li className="tab">
          <span className="icon icon1">{solidGridIcon}</span>
          <label>Home</label>
        </li>
        <li className="tab">
          <span className="icon icon2">+</span>
          <label>Add</label>
        </li>
        <li className="tab" >
          <span className="icon icon3">{solidGridIcon}</span>
          <label>To-Dos</label>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
