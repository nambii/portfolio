import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Popup1 from './popup1.js';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// <Button color="danger" onClick={this.toggle}>{this.state.modal+' '}</Button>
// <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-open" id="portfolio-modal-1">
//   <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
//   <ModalBody>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//   </ModalBody>
//   <ModalFooter>
//     <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//   </ModalFooter>
// </Modal>
export default class Grid extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        modal: false,
        image: null
      };

      this.toggle = this.toggle.bind(this);
      this.imageClick = this.imageClick.bind(this);
    }

    toggle(param,e) {
      console.log('Click!!!!'+ param);
      this.setState({
        modal: !this.state.modal,
        image: param
      });
    }
      imageClick() {
           console.log('Click!!!!');
         }


  render() {
    return (
  <Element name="test3" className="element " >
  <br/>
  <br/>
      <section className="portfolio" id="portfolio">
  <div className="container">
    <h2 className="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
    <hr className="star-dark mb-5"></hr>
    <div className="row">
      <div className="col-md-6 col-lg-4" >
        <a className="portfolio-item d-block mx-auto " href="#portfolio-modal-1" onClick={this.toggle.bind(this,'assets/wakul.jpeg')} >
          <div className="portfolio-item-caption d-flex position-absolute h-100 w-100 " >
            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white " >
              <i className="mx-auto text-center">A cloud based web application.</i>
            </div>
          </div>
          <img className="img-fluid" src="assets/wakul1.jpeg"  />
        </a>
        <div>


      </div>
      </div>
      <Popup1 ButtonLabel={this.state.modal+' '} show={this.state.modal} tog={this.toggle} image={this.state.image}/>
      <div className="col-md-6 col-lg-4">
        <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2" onClick={this.toggle.bind(this,'assets/OCR.jpeg')}>
          <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
              <i className="mx-auto text-center">Character Recognition from Historic Documents</i>
            </div>
          </div>
          <img className="img-fluid mx-auto text-center" src="assets/OCR.jpeg" alt=""></img>
        </a>
      </div>
      <div className="col-md-6 col-lg-4">
        <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3" onClick={this.toggle.bind(this,'assets/analytics.jpeg')}>
          <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
              <i className="mx-auto text-center">Undertook variety of analytics on tweets harvested.</i>
            </div>
          </div>
          <img className="img-fluid" src="assets/analytics.jpeg" alt=""></img>
        </a>
      </div>
      <div className="col-md-6 col-lg-4">
        <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-4" onClick={this.toggle.bind(this,'assets/snapchat.jpeg')}>
          <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
              <i className="mx-auto text-center">An iOS native mobile application similar to Snapchat.</i>
            </div>
          </div>
          <img className="img-fluid" src="assets/snapchat.jpeg" alt=""></img>
        </a>
      </div>
      <div className="col-md-6 col-lg-4">
        <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-5" onClick={this.toggle.bind(this,'assets/multi.jpeg')}>
          <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
            <i className="mx-auto text-center">A multi-server system to broadcast activity objects between a number of clients in the system.</i>
            </div>
          </div>
          <img className="img-fluid" src="assets/multi.jpeg" alt=""></img>
        </a>
      </div>
      <div className="col-md-6 col-lg-4">
        <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6" onClick={this.toggle.bind(this,'assets/feedback.jpeg')}>
          <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                <i className="mx-auto text-center">An online customer feedback system built using ASP.Net.</i>
            </div>
          </div>
          <img className="img-fluid" src="assets/feedback.jpeg" alt=""></img>
        </a>
      </div>
    </div>
  </div>
</section>
</Element>
    );
  }
}
