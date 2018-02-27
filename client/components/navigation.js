import React from 'react';
import {
  Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class Navigation extends React.Component {
  render() {
    return (

          <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
        <div className="container">
          <a href="#"><Link activeClass="active" className="test1 navbar-brand " to="test1" spy={true} smooth={true} duration={500} >
          EBIN</Link></a>
          <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-0 mx-lg-1">
          <a href="#">  <Link activeClass="active" className="test2 nav-link py-3 px-0 px-lg-3 rounded" to="test2" spy={true} smooth={true} duration={500} >
            About
              </Link></a>
            </li>
              <li className="nav-item mx-0 mx-lg-1">
              <a href="#"><Link activeClass="active" className="test3 nav-link py-3 px-0 px-lg-3 rounded" to="test3" spy={true} smooth={true} duration={500} >
              Projects</Link></a>

              </li>
              <li className="nav-item mx-0 mx-lg-1">
              <a href="#"><Link activeClass="active" className="test3 nav-link py-3 px-0 px-lg-3 rounded" to="test4" spy={true} smooth={true} duration={500} >
              Contact</Link></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}
