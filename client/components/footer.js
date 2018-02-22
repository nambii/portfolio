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

export default class Footer extends React.Component {
  render() {
    return (

      <footer className="footer text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <p className="lead mb-0">1/14 Arthur Street</p>
                  <p className="lead mb-0">Hughesdale, 3166</p>
              </div>
              <div className="col-md-4 ">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fa fa-fw fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fa fa-fw fa-google-plus"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fa fa-fw fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fa fa-fw fa-linkedin"></i>
                    </a>
                  </li>
                  
                </ul>
              </div>

            </div>
          </div>
        </footer>

    );
  }
}
