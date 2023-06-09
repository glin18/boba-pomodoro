import React, { useState } from "react";

export const SettingsContainer = ({ onSubmitHandler }) => {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [restMinutes, setRestMinutes] = useState(5);

  const onChangeWork = (event) => {
    setWorkMinutes(event.target.value);
  };

  const onChangeRest = (event) => {
    setRestMinutes(event.target.value);
  };

  return (
    <div className="settings-container">
      {/* <div className="settings-title">Boba Settings</div> */}
      <div>Sugar Levels (Work Minutes): {workMinutes}</div>
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="60"
          value={workMinutes}
          step="1"
          className="slider"
          id="myRange"
          onChange={onChangeWork}
        />
      </div>
      <div>Ice Levels (Break Minutes): {restMinutes}</div>
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="60"
          value={restMinutes}
          step="1"
          className="slider"
          id="myRange"
          onChange={onChangeRest}
        />
      </div>
      <div className="enter button" onClick={()=>onSubmitHandler(workMinutes, restMinutes)}>Enter</div>
    </div>
  );
};
