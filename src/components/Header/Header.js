import React from 'react';
import logo from '../../logo.svg';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

function Header() {
  return (
      <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
              <a className="navbar-brand logo" href="#">
                    <img src={logo} alt="multistepform" />
                  </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home
                          <span className="sr-only">(current)</span>
                        </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><FaLinkedin /> LinkeDin</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><FaGithubSquare /> GitHub</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </header>
  );
}

export default Header;
