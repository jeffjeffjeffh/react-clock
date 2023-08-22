import { useState, useEffect } from "react";

import useRealTime from "./utils/useRealTime";

import Hands from "./Hands/Hands";
import Ticks from "./Ticks/Ticks";
import Numbers from "./Numbers/Numbers";

import "./App.css";

function App() {
  // FAKE TIME
  const [fakeTime, setFakeTime] = useState({
    hours: 12,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      setFakeTime((prevTime) => {
        const newTime = { ...prevTime };

        newTime.seconds++;
        if (newTime.seconds === 61) {
          newTime.seconds = 1;
          newTime.minutes++;
          if (newTime.minutes === 61) {
            newTime.minutes = 1;
            newTime.hours++;
            if (newTime.hours === 13) {
              newTime.hours = 1;
            }
          }
        }

        return { ...newTime };
      });
    };
    const interval = setInterval(updateTime, 0.01);
    return () => clearInterval(interval);
  }, []);

  // REAL TIME
  const realTime = useRealTime();

  // BUTTON HANDLER
  const [timeType, setTimeType] = useState("real");

  const handleTypeButton = (e) => {
    const { id } = e.target;
    console.log(id);
    if (id === "fake") {
      setTimeType("fake");
      setFakeTime(() => {
        return {
          hours: realTime.getHours(),
          minutes: realTime.getMinutes(),
          seconds: realTime.getSeconds(),
        };
      });
    } else {
      setTimeType("real");
    }
  };

  // JSX
  return (
    <main>
      <div className="clock">
        <Ticks />
        <Numbers />
        <div className="center"></div>
        {timeType === "fake" ? (
          <Hands time={fakeTime} />
        ) : (
          <Hands time={realTime} />
        )}
      </div>
      <button
        id="real"
        style={{ position: "absolute", top: "1150px", left: "300px" }}
        onClick={handleTypeButton}
      >
        The Normal, Boring Time
      </button>
      <button
        id="fake"
        style={{ position: "absolute", top: "1150px", left: "800px" }}
        onClick={handleTypeButton}
      >
        BLAZINGLY FAST TIME
      </button>
    </main>
  );
}

export default App;
