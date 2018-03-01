
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
      <Modal isOpen={this.props.show} toggle={this.props.tog} className="modal-open" id="portfolio-modal-1" size="lg">
        <ModalHeader toggle={this.props.tog} ><div className="masthead ">
          <div className="container">
            <img className="img_l" src={this.props.image} ></img>
          </div>
          </div></ModalHeader>
        <ModalBody>

          {this.props.text}
          </ModalBody>
        <div className="mx-auto" >
        <ModalFooter >
          <Button color="primary" onClick={this.props.tog}>Cancel</Button>
        </ModalFooter>
        </div>
      </Modal>
      </div>
    );
  }
}

export default ModalExample;
