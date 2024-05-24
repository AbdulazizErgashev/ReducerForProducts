import React, { useEffect, useRef, useState } from "react";

export default function Taymer() {
  const [time, setTime] = useState(60); // Set the initial time (in seconds)
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const intervalRef = useRef(null);

  //   Handle the alert sound
  const playAlertSound = () => {
    const audio = new Audio(
      "https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=33043"
    );
    audio.play();
  };

  useEffect(() => {
    if (time === 0) {
      setIsActive(false);
      setIsPaused(true);
      playAlertSound();
    }
  }, [time]);

  useEffect(() => {
    if (isActive && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(true);
    setTime(60); // Reset to initial time
  };

  return (
    <div>
      <div className="container">
        <div className="flex items-center flex-col">
          <h1 className="text-3xl font-black font-mono py-5 capitalize border-4 border-[#1a334a] bg-[#bdd1c5] text-[#1a334a] w-[100%] text-center mt-5 shadow-2xl shadow-[#bdd1c5]">
            taymer and clock
          </h1>
          {/* <div className="mt-5 text-2xl font-mono text-[#1a334a] bg-[#bdd1c5] border-2 border-[#1a334a] px-4 py-2 rounded shadow-lg">
            Timer: {seconds} seconds
          </div> */}

          <div className="mt-5 space-x-3">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={handleStart}
              disabled={isActive && !isPaused}
            >
              Start
            </button>
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
              onClick={handlePause}
              disabled={!isActive || isPaused}
            >
              Pause
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
