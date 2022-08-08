import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight, BsArrowRepeat } from "react-icons/bs";
import { IoIosOptions } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import "../styles/Chrome.css";

const Chrome = ({ closeToggle, chromeDisplay, toggleChromeDisplay }) => {
  const [sizeWindow, setSizeWindow] = useState(true);

  const toggleSizeWindow = () => {
    setSizeWindow(!sizeWindow);
  };

  return (
    <div
      className={
        sizeWindow
          ? "container-chrome chrome-min"
          : "container-chrome chrome-max"
      }
      style={
        chromeDisplay ? { visibility: "visible" } : { visibility: "hidden" }
      }
    >
      <div
        className={
          sizeWindow
            ? "container-chrome-header border-radius"
            : "container-chrome-header"
        }
      >
        <p>Google Chrome</p>
        <div className="container-button">
          <div className="button-form" onClick={toggleChromeDisplay}></div>
          <div className="button-form" onClick={toggleSizeWindow}></div>
          <div className="button-form" onClick={closeToggle}></div>
        </div>
      </div>

      <div className="chrome-nav">
        <BsArrowLeft />
        <BsArrowRight />
        <BsArrowRepeat />
        <input type="text" className="input-chrome" />
        <CgProfile />
        <IoIosOptions />
      </div>
      <div className="container-iframe">
        <iframe
          src="https://bing.fr"
          title="Exemple d'iframe"
          className="iframe-bing"
        ></iframe>
      </div>
    </div>
  );
};

export default Chrome;
