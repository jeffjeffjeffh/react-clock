import { useState, useEffect } from "react";

import Ticks from "./Ticks";
import Numbers from "./Numbers";
import HourHand from "./HourHand";
import MinuteHand from "./MinuteHand";

import "./App.css";

function App() {
  const [hour, setHour] = useState(9);
  const [minute, setMinute] = useState(45);

  useEffect(() => {
    let interval = setInterval(() => {
      setHour((prevHour) => {
        let nextHour;
        if (prevHour == 12) {
          nextHour = 1;
        } else {
          nextHour = prevHour + 1;
        }
        return nextHour;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      setMinute((prevMinute) => {
        let nextMinute;
        if (prevMinute == 60) {
          nextMinute = 1;
        } else {
          nextMinute = prevMinute + 1;
        }
        return nextMinute;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <button className="test" onClick={() => console.log(hour)}>
        clicky
      </button>
      <div className="clock">
        <Ticks />
        <Numbers />
        <div className="center"></div>
        <HourHand hour={hour} />
        <MinuteHand minute={minute} />
      </div>
    </main>
  );
}

export default App;
