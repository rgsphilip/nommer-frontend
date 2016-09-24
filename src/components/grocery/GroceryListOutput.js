import React, { Component } from 'react';
import GroceryItem from './GroceryItem';
import { hashHistory } from 'react-router';

class GroceryListOutput extends Component {
	render() {
		let groceryItems = this.props.groceries.map(grocery => {
			return (
				<GroceryItem
					key={grocery.id}
					id={grocery.id}
					groceryName={grocery.groceryName}
					handleGroceryClick={this.props.handleGroceryClick}
				/>
			);
		});

		return (
			<div>
				<div className="title">Groceries To Buy: </div>
				{
					this.props.loading ? 
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

