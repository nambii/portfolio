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
  <Element name="test4" className="element" >
      <footer className="footer text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Ebin Joshy</h4>
                <p className="lead mb-0">1/14 Arthur Street</p>
                  <p className="lead mb-0">Hughesdale, 3166</p>
                  <div>
                  <p className="floater ">email: <a href="mailto:ebinjoshy@gmail.com" className=""> ebinjoshy@gmail.com </a></p>
                  </div>
              </div>
              <div className="col-md-4 ">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" target="_blank" href="http://www.facebook.com/ebinjoshy">
                      <i className="fa fa-fw fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" target="_blank" href="http://www.twitter.com/ebinjoshy">
                      <i className="fa fa-fw fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" target="_blank" href="https://www.linkedin.com/in/ebinjoshy/">
                      <i className="fa fa-fw fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" target="_blank" href="http://www.github.com/nambii">
                      <i className="fa fa-fw fa-github"></i>
                    </a>
                  </li>

                </ul>


              </div>

            </div>

          </div>
       <p style={{bottom:"0px"}}>Copyright Ebin Joshy ©2018 -- Made with <span><a class="" href="https://reactjs.org/" target="_blank">React</a></span></p>
        </footer>

</Element>
    );
  }
}
