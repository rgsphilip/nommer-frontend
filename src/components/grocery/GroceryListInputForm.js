import React, { Component } from 'react';
import {Button, Form, FormGroup, FormControl, Col } from 'react-bootstrap';
import {postAuth} from '../../utils/api-helper';

class GroceryListInputForm extends Component {
  constructor(props) {
    super(props);
    this.postNewGroceries = this.postNewGroceries.bind(this);
    this.handleChangeGroceries = this.handleChangeGroceries.bind(this);
  }

  postNewGroceries() {
      this.props.postNewGroceries(this.state.groceries);
  }

  handleChangeGroceries(event) {
    this.setState({groceries: event.target.value});
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
        
        <Col sm={12}>
            <FormControl componentClass="textarea" placeholder="Ingredients" onChange={this.handleChangeGroceries}/>
        </Col>
        </FormGroup>

        <FormGroup>
        <Col sm={10}>
            <Button type="submit" onClick={this.postNewGroceries}>
                Add Groceries
            </Button>
        </Col>
        </FormGroup>
    </Form>
    );
  }
}

export default GroceryListInputForm;
