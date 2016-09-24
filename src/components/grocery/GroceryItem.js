import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';

class GroceryItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleGroceryClick(this.props.id);
  }

  render() {
    return (
      <div className="groceryItem">     
        <Checkbox onChange={this.handleClick}>
          {this.props.groceryName}
        </Checkbox>
      </div>
    );
  }
}

export default GroceryItem;
