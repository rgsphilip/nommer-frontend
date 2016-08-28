import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import RecipeCardAddForm from './RecipeCardAddForm';

const RecipeCardAdd = React.createClass({
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
          Add to your grocery List
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add items to your grocery list:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RecipeCardAddForm />
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