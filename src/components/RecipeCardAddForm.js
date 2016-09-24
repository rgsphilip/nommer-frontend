import React, { Component } from 'react';
import {Button, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import {postAuth} from '../utils/api-helper';

function checkStatus(response) {
  //Function found at fetch github: https://github.com/github/fetch 
  //ensures that an OK status code comes back
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); 
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}


class RecipeCardAddForm extends Component {
  constructor(props) {
    super(props);
    this.getTextFields = this.getTextFields.bind(this);
    this.handleChangeLink = this.handleChangeLink.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeTags = this.handleChangeTags.bind(this);
  }

  getTextFields() {
      console.log("clicked");
      var request =  {
          'link' : this.state.link,
          'title' : this.state.title,
          'tags' : this.state.tags
      };
      console.log(request);
      return postAuth(`http://localhost:3001/postrecipe`, request)
        .then(checkStatus)
        .then(parseJSON);
  }

  handleChangeLink(event) {
    this.setState({link: event.target.value});
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  handleChangeTags(event) {
    this.setState({tags: event.target.value});
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
            Recipe Link
        </Col>
        <Col sm={10}>
            <FormControl type="text" onChange={this.handleChangeLink}/>
        </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
            Recipe Title
        </Col>
        <Col sm={10}>
            <FormControl type="text" onChange={this.handleChangeTitle} />
        </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
            Tags
        </Col>
        <Col sm={10}>
            <FormControl type="text" onChange={this.handleChangeTags} />
        </Col>
        </FormGroup>

        <FormGroup>
        <Col smOffset={2} sm={10}>
            <Button type="submit" onClick={this.getTextFields}>
                Add Card
            </Button>
        </Col>
        </FormGroup>
    </Form>
    );
  }
}

export default RecipeCardAddForm;
