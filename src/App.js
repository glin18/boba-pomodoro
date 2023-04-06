import './App.css';
import { useState } from "react";
import { MainContainer } from './components/MainContainer';
import { SettingsContainer } from "./components/SettingsContainer";
import SettingsIcon from "./images/setting.png";

function App() {
  const [ showSettings, setShowSettings ] = useState(false);

  return (
    <div className="App">
      <div className="bg">
        <img className="settings-icon" src={SettingsIcon} onClick={()=>(setShowSettings(prevSettings => !prevSettings))}></img>
        { showSettings ? <SettingsContainer/> : <MainContainer/>}
      </div>
    </div>
  );
}

export default App;
