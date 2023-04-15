import { useState } from 'react'
import './Clock.css'

const Clock = () => {

    var date = new Date()

    const [oClock, setOClock] = useState(date)

    const updateClock = () => {
        var date = new Date()
        setOClock(date)
    }

    setInterval(updateClock, 1000)

    return (
        <div className='container'>
            <div id='clock'>
                <div className='clockTime'>
                    <p className='clockTimeIngredient'>{oClock.getDate()}</p>
                    <p className='note'>DATE</p>
                </div>
                <div className='clockTime'>
                    <p className='clockTimeIngredient'>{oClock.getHours()}</p>
                    <p className='note'>HOURS</p>
                </div>
                <div className='clockTime'>
                    <p className='clockTimeIngredient'>{oClock.getMinutes()}</p>
                    <p className='note'>MINUTES</p>
                </div>
                <div className='clockTime'>
                    <p className='clockTimeIngredient'>{oClock.getSeconds()}</p>
                    <p className='note'>SECONDS</p>
                </div>
            </div>
        </div>
    )
}
export default Clock