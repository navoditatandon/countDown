import React, { useState, useEffect } from 'react';
import './CountDown.css';

const CountDown = ({timer}) => {

    let [currentTime, setCurrentTime] = useState(timer);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime((prevTime) => prevTime-1);
        }, 1000);

        return () => clearInterval(interval)
    }, [])

    const formatTime = (time) => {
        let hours = Math.floor(time/3600);
        let minutes = Math.floor((time%3600) / 60);
        let seconds = Math.floor(time % 60);

        return `${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`;
    }

    return (
        <div>
            CountDown timer
            <div className='counterTime'>
            {formatTime(currentTime)}
            </div>
        </div>
    );
}

export default CountDown;