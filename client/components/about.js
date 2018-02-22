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

export default class Footer extends React.Component {
  render() {
    return (
      <Element name="test2" className="element bg-primary" >
<br/>
<br/>

      <section className="bg-primary text-white mb-0" id="about">
  <div className="container">
    <h2 className="text-center text-uppercase text-white">About</h2>
    <hr className="star-light mb-5"/>
    <div className="row">
      <div className=" mx-auto text-center">
        <p className="lead">A bright, talented and self-motivated professional with experience in fields of testing, web development and databases with exceptional analytical, design and problem-solving skill. Recognized as a creative thinker by team members and outstanding team player by senior management, who has excellent communication skills as well.
Now looking to work in a challenging environment to enhance the knowledge, working capabilities, professional skills and to serve the organization in the best possible way with sheer determination and commitment.
</p>
      </div>
    </div>

  </div>
</section>
   </Element>
    );
  }
}
