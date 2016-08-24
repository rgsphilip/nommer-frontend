import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import RecipeCardAdd from './RecipeCardAdd';
import './RecipeCard.css';

class RecipeBook extends Component {


	render() {
		return (
      		<div className="recipeBook">		
				<RecipeCardAdd />
				<RecipeCard />
			</div>
				
    	);
  	}
}

export default RecipeBook;

// 	componentWillMount() {
//     	this.setState({loading: true});

//     fetch('http://localhost:3001/recipes').then(response => {
// 		debugger;
//     	if (response.ok) {
//     		this.setState({loading: false});
//       	} else {
// 			console.log("ugh");
// 		}
//     });
//   }
// { this.state.loading ?
// 					<span>Loading...</span> :
// 				<div>

// 				}
//       		</div>