import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Tags.css';

class TagsField extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.tagName);
  }

  render() {
    return (
      <div className="tagsField">
        <Button type="submit" onClick={this.handleClick}>
          {this.props.tagName}
        </Button>
      </div>
    );
  }
}

export default TagsField;