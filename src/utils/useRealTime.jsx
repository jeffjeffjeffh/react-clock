import { useState, useEffect } from "react";

export default function useRealTime() {
  const [realTime, setRealTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setRealTime(() => new Date());
    };
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return realTime;
}
