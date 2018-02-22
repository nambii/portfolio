
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
export default class Header extends React.Component {
  render() {
    return (
    <Element name="test1" className="element" >
          <header className="masthead bg-primary text-white text-center" id="page-top">
            <div className="container">
              <img className="img-fluid mb-5 d-block mx-auto img_s" src="assets/profile.png" alt="avatar"></img>
              <h1 className="text-uppercase mb-0">Ebin Joshy</h1>
              <hr className="star-light"></hr>
              <h2 className="font-weight-light mb-0">Web Developer - Data Engineer </h2>
            </div>
          </header>
</Element>
    );
  }
}
