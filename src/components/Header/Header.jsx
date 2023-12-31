import React, { useState } from "react";
import Bars from "../../assets/bars.png";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="header" id="home">
        <img src={Logo} alt="" className="logo" />
        {menuOpen === false && mobile === true ? (
          <div
            style={{
              backgroundColor: "var(--appColor)",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
            onClick={() => setMenuOpen(true)}
          >
            <img
              src={Bars}
              alt=""
              style={{ cursor: "pointer", width: "1.5rem", height: "1.5rem" }}
            />
          </div>
        ) : (
          <div>
            <ul className="header-menu">
              <li>
                <Link
                  to="home"
                  activeClass="active"
                  onClick={() => setMenuOpen(false)}
                  span={true}
                  smooth={true}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="programs"
                  onClick={() => setMenuOpen(false)}
                  span={true}
                  smooth={true}
                >
                 Programs
                </Link>
              </li>
              <li>
                <Link
                  to="reasons"
                  onClick={() => setMenuOpen(false)}
                  span={true}
                  smooth={true}
                >
                Why Us
                </Link>
              </li>
              <li>
                <Link
                  to="plans"
                  onClick={() => setMenuOpen(false)}
                  span={true}
                  smooth={true}
                >
                Plans
                </Link>
              </li>
              <li>
                <Link
                  to="testimonial"
                  onClick={() => setMenuOpen(false)}
                  span={true}
                  smooth={true}
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
