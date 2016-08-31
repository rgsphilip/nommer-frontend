import React, { Component } from 'react';
import {getAuth} from '../../utils/api-helper';
import GroceryItem from './GroceryItem';
import { hashHistory } from 'react-router';

class GroceryListOutput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading : true,
			response : []
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
					response : json,
					loading : false
				})
			})
			.catch(function(ex) {
				console.log("uh oh");
				console.log(ex);
			});
			// .catch(function(ex) {
			// 	hashHistory.push('/login');
			// });
	}

	render() {
		let groceryItems = this.state.response.map( grocery => {
			return <GroceryItem key={grocery.id} groceryName={grocery.groceryName} />
		})
		return (
			<div>
				<div className="title">Groceries To Buy: </div>
				{
					this.state.loading ? 
						<span>Loading...</span>
					:
					<div>
						{groceryItems}
					</div>
				}
			</div>
    	);
  	}
}

export default GroceryListOutput;

