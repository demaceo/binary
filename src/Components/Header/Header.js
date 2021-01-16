import { useState, useRef, useEffect } from "react";
import './Header.css';


function Header() {
    const [time, setTime] = useState();
    const [date, setDate] = useState(Date().toLocaleString().slice(0, 11));
    const [counter, setCounter] =  useState(0);
    const renderCounter = useRef(0)
    const currentMonth = date.slice(0, 7);
    const timeRef = useRef();
    const hourGlassRef = useRef();
    const dateRef = useRef();
    
    useEffect(()  => {
        setInterval(() => {
            setTime(new Date().toLocaleString().slice(11))
        }, 1000)
        renderCounter.current = renderCounter.current + 1
    }, [])
    
    const toggleTime = async(day) => {
        console.log("dateref", dateRef.current.innerText);
        if (!renderCounter.current) {
          timeRef.current.classList.remove("hidden");
          hourGlassRef.current.classList.add("hidden");
        } else {
          timeRef.current.classList.add("hidden");
          hourGlassRef.current.classList.remove("hidden");
        }
    }

    const rewind = async() => {
        let newDayNum = (Number(date.slice(8)) - 1).toString();
        let previousDay = currentMonth.concat(" " + newDayNum);
        if(counter !== -7) {
            setDate(previousDay);
            renderCounter.current = renderCounter.current - 1; 
            toggleTime(date); 
        }
    }

  const fastForward = async() => {
    let newDayNum = (Number(date.slice(8)) + 1).toString();
    let nextDay = currentMonth.concat(" " + newDayNum);
    if (counter !== 7) {
        setDate(nextDay);
        renderCounter.current = renderCounter.current + 1;
        toggleTime(date);
        
        
    } 
  };

    return (
      <div className="header-container">
        <h2 className="date" ref={ dateRef }>{date}</h2>
        <h3 className="time" ref={ timeRef }>{time}</h3>
        <i class="fas fa-hourglass-half hidden" ref={hourGlassRef} />
        <div className="header-arrows">
          <i className="fas fa-chevron-left" id="left" onClick={rewind}></i>
          <i
            className="fas fa-chevron-right"
            id="right"
            onClick={fastForward}
          ></i>
        </div>
      </div>
    );
}


export default Header;