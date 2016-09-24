import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { hashHistory } from 'react-router';
import GroceryListInputModal from './GroceryListInputModal';
import GroceryListOutput from './GroceryListOutput';
import {getAuth, postAuth} from '../../utils/api-helper';
import './Grocery.css';
//import GroceryListOutput from './GroceryListOutput';

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

class GroceryView extends Component {
  constructor(props) {
		super(props);

    this.handleGroceryClick = this.handleGroceryClick.bind(this);
    this.postNewGroceries = this.postNewGroceries.bind(this);
    this.deleteOldGroceries = this.deleteOldGroceries.bind(this);
		this.state = {
			loading : true,
			groceries : []
		}
	}

  componentWillMount() {
		getAuth(`http://localhost:3001/allgroceries`)
      .then(function(response) {
				return response.json()
			})
      .then(json => {
				console.log('parsed groceries', json)
				this.setState({
					groceries : json,
					loading : false
				})
			})
			.catch(function(ex) {
				hashHistory.push('/login');
			});
	}

  postNewGroceries(newGroceries) {
    console.log("clicked");
    var request =  {
        'groceries' : newGroceries
    };
    console.log(request);
    return postAuth(`http://localhost:3001/postgroceries`, request)
      .then(checkStatus)
      .then(parseJSON)
      .then(json => {
        this.setState({
          groceries: json,
        });
    });
  }

  handleGroceryClick(groceryId) {
    this.setState({ 
      groceries: this.state.groceries.map( grocery => {
        if (grocery.id === groceryId) {
          grocery.checked = !grocery.checked;
        }
        return grocery;
      })
    });
    console.log(this.state.groceries);
  }

  deleteOldGroceries(oldGroceries) {
    console.log("clicked");
    var request = {
      'groceries' : this.state.groceries.filter(grocery => {
        return grocery.checked;
      })
    };
    console.log(request);
    return postAuth(`http://localhost:3001/deletegroceries`, request)
    .then(checkStatus)
      .then(parseJSON)
      .then(json => {
        this.setState({
          groceries: json,
        });
    });
  }

  render() {

    return (
      <div>
        <GroceryListInputModal postNewGroceries={this.postNewGroceries}/>
        <GroceryListOutput loading={this.state.loading} groceries={this.state.groceries} handleGroceryClick={this.handleGroceryClick}/>
        <Button onClick={this.deleteOldGroceries}>Got it!</Button>
      </div>
    );
  }
}

export default GroceryView;