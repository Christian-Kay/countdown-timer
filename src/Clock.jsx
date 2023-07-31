import { useEffect, useState } from "react"


function Clock() {
    const currentDate = new Date();
    const timeText = currentDate.toLocaleTimeString('en-US')
    const dateText = currentDate.toLocaleDateString('en-US')

    const [currentTime, setCurrentTime] = useState(timeText);
    // const [now, setNow ] = useState(null)
    // const intervalRef = useRef(null)

    useEffect(() => {
        const ticks = setInterval(()=> {
            setCurrentTime(
                new Date().toLocaleTimeString('en-US')
            )
        },1000);
        return ()=> clearInterval(ticks)
     }, [])

    return (
        <div className="clock-div">
            <span>Hello, Chief </span>
            <span> The current Date is {dateText}</span>
            <span> The current Time is {currentTime}</span>
        </div>
    )
}

export default Clock