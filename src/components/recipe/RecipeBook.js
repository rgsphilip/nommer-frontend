import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import RecipeCard from './RecipeCard';
import RecipeCardAdd from './RecipeCardAdd';
import {getAuth} from '../../utils/api-helper';
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
		getAuth(`http://localhost:3001/recipes`)
			.then(function(response) {
				return response.json()
			})
			.then(json => {
				console.log('parsed json', json)
				this.setState({
					response : json,
					loading : false
				})
			})
			.catch(function(ex) {
				hashHistory.push('/login');
			});
	}

	render() {
		let recipeNames = this.state.response.map( recipe => {
			return <RecipeCard key={recipe.id} title={recipe.recipeName} link={recipe.recipeLink} tags={recipe.tags} id={recipe.id}/>
		})
		return (
			<div>
				<div className="title">Your Recipes</div>
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

