import React from 'react';
import Styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.rightSection}></div>
      <div className="logo">
        <img src="" alt="" />
      </div>
      <div className="leftSection"></div>
    </nav>
  );
}

export default Navbar;