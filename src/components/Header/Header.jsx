import "./Header.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <section className="Header">
        <div className="Header__logoicon">
          {/* <NavLink to="/"> */}
          {/* <Link to="/"> */}
          <img
            className="Header__logo"
            src="../../src/assets/images/BrainFlix-logo.svg"
            alt=""
          />
          {/* </Link> */}
          {/* </NavLink> */}
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
