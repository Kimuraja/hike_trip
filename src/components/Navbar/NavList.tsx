import React from 'react';

const NavList: React.FC = () => {
  return (
    <div className="col">
      <nav className="nav-list">
        <ul className="nav-list__items">
          <li className="nav-list__item">
            <a className="nav-list__link" href="#">Home</a>
          </li>
          <li className="nav-list__item">
            <a className="nav-list__link" href="#">Menu</a>
          </li>
          <li className="nav-list__item">
            <a className="nav-list__link" href="#">Our Story</a>
          </li>
          <li className="nav-list__item">
            <a className="nav-list__link" href="#">Contact Us</a>
          </li>
          <li className="nav-list__item">
            <input type="text" className="nav-list__input" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavList;
