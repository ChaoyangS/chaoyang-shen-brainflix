import "./Header.scss";
import { BrowserRoutee, Routes, Route } from "react-router-dom";
import axios from "axios";

export default function Header() {
  return (
    <>
      <section className="Header">
        <div className="Header__logoicon">
          <img
            className="Header__logo"
            src="../../src/assets/images/BrainFlix-logo.svg"
            alt=""
          />
        </div>
        <div className="Header__searchsection">
          <form action="">
            <input
              className="Header__search"
              name="Search"
              placeholder="Search"
            />
          </form>
          <img
            className="Header__icon"
            src="../../src/assets/images/Mohan-muruge.jpg"
            alt=""
          />
        </div>
        <button className="Header__button">
          {" "}
          <img src="../../src/assets/images/upload.svg" alt="" />
          UPLOAD
        </button>
      </section>
    </>
  );
}
