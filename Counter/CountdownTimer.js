// Create a React component that show a countdown timer and update the remaining time as counts down.
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ start }) => {
  const [time, setTime] = useState(start);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    if (time <= 0) clearInterval(timer);

    return () => clearInterval(timer);
  }, [time]);

  return <div>{time > 0 ? time : 'Time is up!'}</div>;
};

export default CountdownTimer;
