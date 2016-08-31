import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import GroceryListInputModal from './GroceryListInputModal';
import GroceryListOutput from './GroceryListOutput';
//import GroceryListOutput from './GroceryListOutput';

class GroceryView extends Component {
  render() {

    return (
      <div>
        <GroceryListInputModal />
        <GroceryListOutput />
      </div>
    );
  }
}

export default GroceryView;