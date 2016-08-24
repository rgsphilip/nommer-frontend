import React, { Component } from 'react';
import RecipeCardFooter from './RecipeCardFooter';
import './RecipeCard.css';
var link = 'http://minimalistbaker.com/the-ultimate-mediterranean-bowl/';
var tags = ['vegan'];
var title = "The Ultimate Mediterranean Bowl"

class RecipeCard extends Component {
  render() {
    return (
      <div className="recipeCard">
        <div>{title}</div>
        <RecipeCardFooter
          link={link}
          tags={tags}
        />
      </div>
    );
  }
}

export default RecipeCard;
