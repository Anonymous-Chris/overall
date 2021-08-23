import React, { useEffect } from 'react'
import moment from 'moment'

function LiveClock() {


  let clock;
  useEffect(() => {

    try {
      clock = setInterval(function () {
        document.getElementById('clock').innerHTML = moment().format('HH:mm:ss')
      }, 1000);

    } catch (error) {
      console.log(error);
    }

    return () => {
      clearInterval(clock)
    }
  }, [])

  return (
    <div className="clock">
      <div id="clock"></div>
    </div>
  )
}

export default LiveClock