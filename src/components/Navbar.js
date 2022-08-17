import React from 'react';
import '../styling/main.css';

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
      <div className="nav__div-name">
        Ige Daniel O.
      </div>
      <div className="nav__div-navMenu">
        <ul className="nav__ul-list">
          <li className="nav__li-listItem">Home</li>
          <li className="nav__li-listItem">
            <a href="https://drive.google.com/file/d/1jxl5ICcsdv09oVzFnpxvhblZpt80QIE4/view?usp=sharing" target='_blank' download> Resume</a>
          </li>
          <li className="nav__li-listItem">Contact</li>
        </ul>
      </div>

      </nav>
    </div>
  )
}

export default Navbar