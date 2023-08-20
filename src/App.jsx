import { useState, useEffect } from "react";

import Ticks from "./Ticks/Ticks";
import Numbers from "./Numbers/Numbers";
import HourHand from "./Hands/HourHand";
import MinuteHand from "./Hands/MinuteHand";
import SecondHand from "./Hands/SecondHand";

import "./App.css";

function App() {
  const [hour, setHour] = useState(9);
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

  const [minute, setMinute] = useState(45);
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

  const [second, setSecond] = useState(45);
  useEffect(() => {
    let interval = setInterval(() => {
      setSecond((prevSecond) => {
        let nextSecond;
        if (prevSecond == 60) {
          nextSecond = 1;
        } else {
          nextSecond = prevSecond + 1;
        }
        return nextSecond;
      });
    }, 0.8333);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className="clock">
        <Ticks />
        <Numbers />
        <div className="center"></div>
        <HourHand hour={hour} />
        <MinuteHand minute={minute} />
        <SecondHand second={second} />
      </div>
    </main>
  );
}

export default App;
