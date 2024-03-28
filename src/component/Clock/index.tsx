import React, { useEffect, useState } from "react";
import { ClockInterface } from "../../interfaces/ClockInterfaces";
import "./index.css";

function Clock({ timeZone }: ClockInterface) {
  // console.log("timeZone", timeZone);
  const [time, setTime] = useState(
    new Date(new Date().toLocaleString("en", { timeZone: timeZone }))
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(
        new Date(new Date().toLocaleString("en", { timeZone: timeZone }))
      );
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [timeZone]);

  console.log("hours", time.getHours() * 30, (time.getMinutes() / 30) * 15);

  return (
    <div className="relative top-36">
      <div className="clock">
        <div
          className="hour_hand"
          style={{
            transform: `rotateZ(${
              time.getHours() * 30 + (time.getMinutes() / 30) * 15
            }deg)`,
          }}
        />
        <div
          className="min_hand"
          style={{
            transform: `rotateZ(${time.getMinutes() * 6}deg)`,
          }}
        />
        <div
          className="sec_hand"
          style={{
            transform: `rotateZ(${time.getSeconds() * 6}deg)`,
          }}
        />
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
      </div>
    </div>
  );
}

// Clock.defaultProps = {
//   timeZone: "Europe/London",
// };

export default Clock;
