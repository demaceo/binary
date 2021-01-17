import { useState, useRef, useEffect } from "react";
import './Header.css';

function Header() {
    const [time, setTime] = useState();
    // const [date, setDate] = useState(Date().toLocaleString().slice(0, 11));
    let date = Date().toLocaleString().slice(0, 11);
    const renderCounter = useRef(0)
    const timeRef = useRef();
    const hourGlassRef = useRef();
    const dateRef = useRef();
    
    useEffect(()  => {
        setInterval(() => {
            setTime(new Date().toLocaleString().slice(11))
        }, 1000)
        renderCounter.current = 0;
    }, [])
    
    const toggleTime = (day) => {
        if (!renderCounter.current) {
          timeRef.current.classList.remove("hidden");
          hourGlassRef.current.classList.add("hidden");
        } else if(renderCounter.current > 0) {
            timeRef.current.classList.add("hidden");
            hourGlassRef.current.classList.remove("counter");
            hourGlassRef.current.classList.remove("hidden");
        } else {
            timeRef.current.classList.add("hidden");
            hourGlassRef.current.classList.add('counter');
            hourGlassRef.current.classList.remove("hidden");
        }
    }

    const adjustDate = (num) => {
        Date.prototype.addDays = (num) => {
            let dater = new Date();
            dater.setDate(dater.getDate() + num);
            return dater;
        };
        let daze = new Date();
        return daze.addDays(renderCounter.current);
    }

const rewind = () => { 
    renderCounter.current = renderCounter.current - 1;
    let newDate = adjustDate(renderCounter.current);
    date = newDate.toString().slice(0, 10);
    toggleTime(date);
    dateRef.current.innerText = date;
}

const fastForward = () => {
    renderCounter.current = renderCounter.current + 1;
    let newDate = adjustDate(renderCounter.current);
    date = newDate.toString().slice(0, 10);
    toggleTime(date);
    dateRef.current.innerText = date;
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