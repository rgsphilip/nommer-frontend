import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Tags.css';

class TagsField extends Component {
  
  render() {
    return (
      <div className="tagsField">
        <Button type="submit" onClick={this.getTextFields}>
          {this.props.tagName}
        </Button>
      </div>
    );
  }
}

export default TagsField;