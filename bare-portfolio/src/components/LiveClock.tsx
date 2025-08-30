import { useEffect, useState } from "react";
import { TIMEZONE } from "../../config/info";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{time.toLocaleTimeString(TIMEZONE, { hour12: false })}</div>;
};

export { LiveClock };
