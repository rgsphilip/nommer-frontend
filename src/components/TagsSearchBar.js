import React, { Component } from 'react';
import TagsInput from 'react-tagsinput'
import {Form, FormGroup, ControlLabel } from 'react-bootstrap';
var hello = ["hello"];
class TagsSearchBar extends Component {
  render() {
    return (
      <Form inline>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Search for recipe by tag: </ControlLabel>
          {' '}
          
        </FormGroup>
        <TagsInput value={hello} onChange={hello}/>
        {' '}
        {' '}
      </Form>
    );
  }
}

export default TagsSearchBar;