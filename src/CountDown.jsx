import { useEffect, useRef,  useState } from "react";
import './Countdown.css'
import Clock from "./Clock";

function Countdown() {
    const [inputDate, setInputDate] = useState(new Date())
    const [countDown, setCountDown] = useState(calCountdown(inputDate))
    const newInputRef = useRef('')

    function calCountdown(inputDate){
        const currentDate = new Date();
        const totalSeconds = (inputDate - currentDate);

        const days = Math.floor((totalSeconds / (1000 * 60 * 60 * 24)))
        const hours = Math.floor((totalSeconds / (1000 * 60 * 60)) % (24))
        const mins = Math.floor((totalSeconds / 1000 / 60) % (60))
        const secs = Math.floor((totalSeconds / 1000) % (60));

        return{days, hours, mins, secs};

    }

    useEffect(() => {
        const now = new Date().toDateString()
        if(inputDate.toDateString() === now){
            return setCountDown({days: 0, hours:0, mins:0, secs:0})
        }
        const update = setInterval(() => {
           setCountDown(calCountdown(inputDate))
        }, 1000);
        return () => clearInterval(update)

    }, [inputDate]);


    function onChange(e) {
        newInputRef.current = e.target.value
        //  setInputDate(new Date(e.target.value))
    }
    function onClick(){
        setInputDate(new Date( newInputRef.current))
    }
    
    
    return (
        <div className="countdown-container">
            <h1>COUNTDOWN TIMER</h1>
            <div className="countdown-values">
                <div className="countdown-value">
                    <p className="big-text"> {countDown.days} </p>
                    <span> Days </span>
                </div>
                <span className="countdown-span"> : </span>
                <div className="countdown-value">
                    <p className="big-text"> {countDown.hours} </p>
                    <span> Hours </span>
                </div>
                <span className="countdown-span"> : </span>
                <div className="countdown-value">
                    <p className="big-text"> {countDown.mins} </p>
                    <span> Minutes </span>
                </div>
                <span className="countdown-span"> : </span>
                <div className="countdown-value">
                    <p className="big-text"> {countDown.secs} </p>
                    <span> Seconds </span>
                </div>
            </div>
            <div className="countdown-input-btn">
                <input onChange={onChange} placeholder="Enter a date: YYYY-MM-DD" className="countdown-input" />
                <button onClick={onClick}  className="countdown-btn">
                    Countdown
                </button>
            </div>
            <Clock />
        </div>
    )
}

export default Countdown;