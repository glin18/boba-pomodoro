import './App.css';
import { useState } from "react";
import { MainContainer } from './components/MainContainer';
import { SettingsContainer } from "./components/SettingsContainer";
import SettingsIcon from "./images/setting.png";

function App() {
  const [ showSettings, setShowSettings ] = useState(false);
  const [ workTime, setWorkTime ] = useState(25)
  const [ restTime, setRestTime ] = useState(5)

  const onSubmitHandler = (work, rest) => {
    setWorkTime(work)
    setRestTime(rest)
    setShowSettings(false)
  }

  return (
    <div className="App">
      <div className="bg">
        <img className="settings-icon" src={SettingsIcon} onClick={()=>(setShowSettings(prevSettings => !prevSettings))}></img>
        { showSettings ? <SettingsContainer onSubmitHandler={onSubmitHandler}/> : <MainContainer workTime={workTime} restTime={restTime}/>}
      </div>
    </div>
  );
}

export default App;
