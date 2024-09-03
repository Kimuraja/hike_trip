import React, { useState } from "react";
import "./_NavBtn.scss";
import MenuIcon from "@mui/icons-material/Menu";

const NavMobile: React.FC = () => {
  const [active, setActive] = useState(false);

  const NavigationToggle = () => {
    setActive(!active);
  };

  return (
    <section className="container-fluid navigation">
      <div className="row">
        <section className="col-12">
          <label onClick={NavigationToggle} className="navigation__button">
            <MenuIcon fontSize="large" className="navigation__button--icon" />
          </label>

          <nav className={`navigation__menu ${active ? "active" : ""}`}>
            <ul className="navigation__item">
              <li>
                <a href="#" className="navigation__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="navigation__link">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="navigation__link">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="navigation__link">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </section>
  );
};

export default NavMobile;
