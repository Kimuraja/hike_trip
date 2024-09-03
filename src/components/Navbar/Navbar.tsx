import React from 'react';
import logo from '../../media/logo.png';
import './_Navbar.scss';
import NavMobile from './NavMobile';
import MediaQuery from 'react-responsive';
import NavList from './NavList';


const Navbar: React.FC = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto">
            <img src={logo} alt="logo" className="navbar--logo" />
          </div>
          <MediaQuery minWidth={800}>
            {(desktop) => desktop ? <NavList /> : <NavMobile />}
          </MediaQuery>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
