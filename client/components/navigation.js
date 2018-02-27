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

  constructor(props) {
    super(props);

    this.toggle_brand = this.toggle_brand.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });

  }
  toggle_brand() {
    this.setState({
      isOpen: false
    });
  }
  render() {
    return (

          <Navbar className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
         <div className="container">
          <NavbarBrand href="/"><Link activeClass="active" onClick={this.toggle_brand} className="test1 navbar-brand " to="test1" spy={true} smooth={true} duration={500} >
          EBIN</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="text-white rounded">  <i className="fa fa-bars"></i></NavbarToggler>
           <Collapse isOpen={this.state.isOpen} navbar >
          <Nav className=" navbar-nav ml-auto" navbar>

             <NavItem className="nav-item  mx-0 mx-lg-1">
        <NavLink href="/" > <Link activeClass="active" onClick={this.toggle} className="test2 nav-link py-3 px-0 px-lg-3 rounded" to="test2" spy={true} smooth={true} duration={500} >
            About
              </Link></NavLink>
              </NavItem>
              <NavItem className="nav-item  mx-0 mx-lg-1">
         <NavLink href="/"> <Link activeClass="active" onClick={this.toggle} className="test3 nav-link py-3 px-0 px-lg-3 rounded" to="test3" spy={true} smooth={true} duration={500} >
             Projects
               </Link></NavLink>
               </NavItem>
               <NavItem className="nav-item  mx-0 mx-lg-1">
          <NavLink href="/"> <Link activeClass="active" onClick={this.toggle} className="test4 nav-link py-3 px-0 px-lg-3 rounded" to="test4" spy={true} smooth={true} duration={500} >
              Contact
                </Link></NavLink>
                </NavItem>
            </Nav>
             </Collapse>
      </div>
      </Navbar>

    );
  }
}
