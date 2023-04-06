import React from 'react'

export const SettingsContainer = () => {
  return (
    <div className="settings-container">
        <div className="settings-title">Boba Settings</div>
        <div>
            Sugar Levels (Work Minutes):
        </div>
        <div class="slidecontainer">
            <input type="range" min="1" max="60" class="slider" id="myRange"/>
        </div>
        <div>
            Ice Levels (Break Minutes):
        </div>
        <div class="slidecontainer">
            <input type="range" min="1" max="60" class="slider" id="myRange"/>
        </div>
    </div>
  )
}
