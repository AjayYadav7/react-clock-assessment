import React, { useState } from "react";
import Clock from "../../component/Clock";
import "./index.css";
import { timeZoneInterface } from "../../interfaces/ClockInterfaces";
import { timeZoneData } from "../../utils/functions";
import { LABEL_CLOCK_DASHBOARD } from "../../contants/labelConstants";

const Dashboard = () => {
  const [timeZones, setTimeZones] = useState<string[]>([
    "America/New_York",
    "Asia/Tokyo",
  ]);

  const handleTimeZoneChange = (index: number, event: any) => {
    const updatedTimeZones = [...timeZones];
    updatedTimeZones[index] = event.target.value;
    setTimeZones([...updatedTimeZones]);
  };

  return (
    <div className="dashboard-main-wrapper">
      <div className="dashboard-heading">{LABEL_CLOCK_DASHBOARD}</div>
      <div className="">
        <Clock timeZone="Europe/London" />
        <div className="clock-label">Europe/UK</div>
      </div>
      <div className="clock-wrapper">
        <div className="">
          <Clock timeZone={timeZones[0]} />
          <div className="clock-label">
            <select
              value={timeZones[0]}
              onChange={(event) => handleTimeZoneChange(0, event)}>
              {timeZoneData.map((item: timeZoneInterface, index: number) => (
                <option key={`timeZone_${index}`} value={item.timeZone}>
                  {item.timeZone}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="">
          <Clock timeZone={timeZones[1]} />
          <div className="clock-label">
            <select
              value={timeZones[1]}
              onChange={(event) => handleTimeZoneChange(1, event)}>
              {timeZoneData.map((item: timeZoneInterface, index: number) => (
                <option key={`timeZone_${index}`} value={item.timeZone}>
                  {item.timeZone}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
