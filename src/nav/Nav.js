import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="navigation">
          <li className="navigation__hamburger" data-hamburger><span class="fa fa-navicon"></span></li>
          <li className="navigation__item"><Link to='/'>Home</Link></li>
          <li className="navigation__item"><Link to='/products'>Products</Link></li>
          <li className="navigation__item"><Link to='/contact-us'>Contact us</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
