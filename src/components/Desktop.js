import React, { useState } from "react";
import "../styles/Desktop.css";
import Chrome from "./Chrome";

const Desktop = ({
  addTask,
  deleteTask,
  toggleChromeDisplay,
  chromeDisplay,
}) => {
  const [chromeStatus, setChromeStatus] = useState(false);

  const closeToggle = () => {
    setChromeStatus(!chromeStatus);
    deleteTask("chrome");
  };

  const openChrome = () => {
    setChromeStatus(!chromeStatus);
    addTask("chrome");
  };

  return (
    <div className="container-desktop">
      <div className="grid-desktop">
        <button className="item-1 item-grid">
          <img
            src="./trash_icon.png"
            alt="trash application"
            className="shortcut-desktop"
          />
          <p>Recycle Bin</p>
        </button>
        <button
          className="item-2 item-grid"
          onClick={chromeStatus === true ? toggleChromeDisplay : openChrome}
        >
          <img
            src="./chrome_icon.png"
            alt="chrome application"
            className="shortcut-desktop"
          />
          <p>Google Chrome</p>
        </button>
      </div>

      {chromeStatus ? (
        <Chrome
          closeToggle={closeToggle}
          toggleChromeDisplay={toggleChromeDisplay}
          chromeDisplay={chromeDisplay}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Desktop;
