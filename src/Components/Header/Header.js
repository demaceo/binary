import { useState, useRef, useEffect } from "react";
import './Header.css';


function Header() {
    const [time, setTime] = useState();
    const [date, setDate] = useState(Date().toLocaleString().slice(0, 11));
    const [counter, setCounter] =  useState(0);
    const currentMonth = date.slice(0, 7);
    const timeRef = useRef();
    const hourGlassRef = useRef();
    
    useEffect(()  => {
        setInterval(() => {
            setTime(new Date().toLocaleString().slice(11))
        }, 1000)
    }, []);
    
    const toggleTime = () => {
        if (!counter) {
            timeRef.current.classList.remove('hidden')
            hourGlassRef.current.classList.add('hidden');
        } else {
            timeRef.current.classList.add('hidden');
            hourGlassRef.current.classList.remove("hidden");
        }
    }

    const rewind = () => {
        let newDayNum = (Number(date.slice(8)) - 1).toString();
        let previousDay = currentMonth.concat(" " + newDayNum);
        if(counter !== -7) {
            setCounter(counter-1);   
            setDate(previousDay);
            toggleTime();
        }
    }

  const fastForward = () => {
    let newDayNum = (Number(date.slice(8)) + 1).toString();
    let nextDay = currentMonth.concat(" " + newDayNum);
    if (counter !== 7) {
        setCounter(counter+1);
        setDate(nextDay);
        toggleTime();
    } 
  };

    return (
      <div className="header-container">
        <h2 className="date">{date}</h2>
        <h3 className="time" ref={timeRef}>{time}</h3>
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