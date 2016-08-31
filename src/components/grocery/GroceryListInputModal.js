import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import GroceryListInputForm from './GroceryListInputForm';
const GroceryListInputModal = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    return (
      <div>
        <Button bsStyle="default" onClick={this.open}>
          Add to your grocery list
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Copy and paste your ingredient list here:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <GroceryListInputForm postNewGroceries={this.props.postNewGroceries}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default GroceryListInputModal;