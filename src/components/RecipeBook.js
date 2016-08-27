import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import RecipeCardAdd from './RecipeCardAdd';
import './RecipeCard.css';

class RecipeBook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading : true,
			response : []
		}
	}
	
	componentWillMount() {
		fetch(`http://localhost:3001/recipes`, {
			method: "GET",
			headers: {
				"Accept": "application/json"
			}
		}).then(function(response) {
				return response.json()
			}).then(json => {
				console.log('parsed json', json)
				this.setState({
					response : json,
					loading : false
				})
			})
			.catch(function(ex) {
				console.log('parsing failed', ex)
			});
	}

	render() {
		let recipeNames = this.state.response.map( recipe => {
			return <RecipeCard key={recipe.id} title={recipe.recipeName} link={recipe.recipeLink} tags={recipe.tags} id={recipe.id}/>
		})
		return (
			<div>
				{
					this.state.loading ? 
						<span>Loading...</span>
					:
					<div>
						<RecipeCardAdd />
						{recipeNames}
					</div>
				}
			</div>
    	);
  	}
}

export default RecipeBook;

