
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.show,
      nestedModal: false,
      closeAll: false
    };
}


  render() {
    return (
      <div>
      <Modal isOpen={this.props.show} toggle={this.props.tog} className="modal-open" id="portfolio-modal-1">
        <ModalHeader toggle={this.props.tog}><div className="masthead text-white text-center">
          <div className="container">
            <img className="img-fluid mb-5 d-block mx-auto " src={this.props.image} alt="avatar"></img>
          </div>
          </div></ModalHeader>
        <ModalBody>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <div className="mx-auto" >
        <ModalFooter >
          <Button color="secondary" onClick={this.props.tog}>Cancel</Button>
        </ModalFooter>
        </div>
      </Modal>
      </div>
    );
  }
}

export default ModalExample;
