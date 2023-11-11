import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const StatsCounter = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('statsCounter');

      if (element) {
        const bounding = element.getBoundingClientRect();
        if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
          setStartAnimation(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="statsCounter" className={`flex justify-center items-center space-x-4 p-4 ${startAnimation ? 'animate' : ''}`}>
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          <CountUp end={48777} duration={2} start={startAnimation ? null : undefined} />
        </h2>
        <p className="text-sm">Visitors</p>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          <CountUp end={136050} duration={2} start={startAnimation ? null : undefined} />
        </h2>
        <p className="text-sm">Completed Tasks</p>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          <CountUp end={9.37} duration={2} decimals={2} start={startAnimation ? null : undefined} />
        </h2>
        <p className="text-sm">Current Quality Score</p>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          <CountUp end={2674} duration={2} start={startAnimation ? null : undefined} />
        </h2>
        <p className="text-sm">Writers Active</p>
      </div>
    </div>
  );
};

export default StatsCounter;
