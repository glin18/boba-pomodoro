import React, { useState, useEffect, useRef } from "react";

export const MainContainer = () => {
  const [seconds, setSeconds] = useState(8);
  const [isRunning, setIsRunning] = useState(false);
  const [isWork, setIsWork] = useState(true);
  const intervalID = useRef(null);

  let audio = new Audio("/alarm.mp3")

  const onClickStart = () => {
    setIsRunning(true);
    intervalID.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
  };

  const toggleWork = (isWorkTime) => {
    clearInterval(intervalID.current)
    setIsWork(isWorkTime);
    if (isWorkTime) {
      setSeconds(25);
      document.body.className="work";
    } else {
      setSeconds(5);
      document.body.className="rest";
    }
    if(isRunning){
      intervalID.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
  };

  const onClickStop = () => {
    clearInterval(intervalID.current)
    setIsRunning(false)
  }

  useEffect(() => {
    if (seconds <= 0) {
      clearInterval(intervalID.current);
      audio.play()
      toggleWork(!isWork);
    } 
    document.title = (isWork ? "WORK ":"BREAK ") + Math.floor(seconds / 60) + ":" + (seconds % 60 < 10 ? "0" : "") + seconds % 60
  }, [seconds]);

  useEffect(() => {
    document.title = "Boba Pomodoro"
    return () => {
      clearInterval(intervalID.current);
    };
  }, []);

  return (
    <div className="main-container">
      <div className="timer">
        {Math.floor(seconds / 60)}:{seconds % 60 < 10 && "0"}
        {seconds % 60}
      </div>
      {isRunning ? (
        <div className="start button" onClick={onClickStop}>STOP</div>
      ) : (
        <div className="start button" onClick={() => onClickStart(seconds)}>
          START
        </div>
      )}

      <div className="stage">
        <div
          onClick={!isWork ? () => toggleWork(true) : null}
          className={"button " + (isWork && "active")}
        >
          WORK
        </div>
        <div
          onClick={isWork ? () => toggleWork(false) : null}
          className={"button " + (isWork || "active")}
        >
          BREAK
        </div>
      </div>
    </div>
  );
};
