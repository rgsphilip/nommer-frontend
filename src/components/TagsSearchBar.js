import React, { Component } from 'react';
import {Form, FormGroup, FormControl, Button, ControlLabel} from 'react-bootstrap';

class TagsSearchBar extends Component {
  render() {
    return (
      <Form inline>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Search for recipe by tag: </ControlLabel>
          {' '}
          <FormControl type="text" placeholder="Tags" />
        </FormGroup>
        {' '}
        {' '}
        <Button type="submit">
          Search
        </Button>
      </Form>
    );
  }
}

export default TagsSearchBar;