import React, { Component } from 'react';
import {Button, Form, FormGroup, FormControl, Col } from 'react-bootstrap';
import {postAuth} from '../../utils/api-helper';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

class GroceryListInputForm extends Component {
  constructor(props) {
    super(props);
    this.getTextField = this.getTextField.bind(this);
    this.handleChangeGroceries = this.handleChangeGroceries.bind(this);
  }

  getTextField() {
      console.log("clicked");
      var request =  {
          'groceries' : this.state.groceries
      };
      console.log(request);
      return postAuth(`http://localhost:3001/postgroceries`, request)
        .then(checkStatus)
        .then(parseJSON);
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
            <Button type="submit" onClick={this.getTextField}>
                Add Groceries
            </Button>
        </Col>
        </FormGroup>
    </Form>
    );
  }
}

export default GroceryListInputForm;
