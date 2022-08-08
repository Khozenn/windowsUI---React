import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsBatteryCharging, BsWifi, BsVolumeUp } from "react-icons/bs";
import "../styles/TaskBar.css";

const TaskBar = ({ currentTasks, toggleChromeDisplay }) => {
  const [menuStatus, setMenuStatus] = useState(false);
  var now = new Date();

  var annee = now.getFullYear();
  var mois = ("0" + (now.getMonth() + 1)).slice(-2);
  var jour = ("0" + now.getDate()).slice(-2);
  var heure = ("0" + now.getHours()).slice(-2);
  var minute = ("0" + now.getMinutes()).slice(-2);
  //   var seconde = ("0" + now.getSeconds()).slice(-2);
  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <div className="container-taskbar">
      <div className="leftpart-taskbar">
        <div className="windows-icon icon-taskbar" onClick={toggleMenu}></div>
        <div className="search-icon-container icon-taskbar">
          <FaSearch className="search-icon" />
        </div>
        <div className="container-current-task">
          {currentTasks.map((item, index) => (
            <div
              className=" icon-taskbar"
              key={index}
              onClick={toggleChromeDisplay}
            >
              <img src={`./${item}_icon.png`} alt="" />
            </div>
          ))}
        </div>
      </div>
      {menuStatus ? <div className="panel-taskbar"></div> : ""}

      <div className="rightpart-taskbar">
        <div className="container-notification-taskbar">
          <div
            className="container-item-notification icon-taskbar"
            title="Charging"
          >
            <BsBatteryCharging />
          </div>
          <div className="container-item-notification icon-taskbar">
            <BsWifi />
          </div>
          <div className="container-item-notification icon-taskbar">
            <BsVolumeUp />
          </div>
        </div>
        <div className="container-date-taskbar icon-taskbar">
          <p>{heure + ":" + minute}</p>
          <p>{jour + "/" + mois + "/" + annee}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskBar;
