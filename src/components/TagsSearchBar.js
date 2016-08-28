import React, { Component } from 'react';
import TagsInput from 'react-tagsinput'
import {Form, FormGroup, ControlLabel } from 'react-bootstrap';
import './Tags.css';

class TagsSearchBar extends Component {
  render() {
    return (
      <Form inline className="searchBar title">
        <FormGroup controlId="formInlineName">
          <ControlLabel>Search for recipe by tag: </ControlLabel>
          {' '}
          
        </FormGroup>
        <TagsInput value={this.props.tags} onChange={this.props.handleSearchTags}/>
        {' '}
        {' '}
      </Form>
    );
  }
}

export default TagsSearchBar;