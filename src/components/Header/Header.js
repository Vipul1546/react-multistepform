import React from 'react';
import logo from '../../logo.svg';

function Header() {
  return (
      <header>
        <div className="row">
          <div className="col-md-4 logo">
            
              <img className="img-responsive" src={logo} alt="cyptyLogo"/>
            
          </div>
          <div className="col-md-8 mainNav">
            <nav className="navbar navbar-expand-sm bg-light">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <p className="nav-link" href="#">Home</p>
                </li>
                <li className="nav-item">
                  <p className="nav-link" href="#">Linkdin</p>
                </li>
                <li className="nav-item">
                  <p className="nav-link" href="#">Github</p>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  );
}

export default Header;
