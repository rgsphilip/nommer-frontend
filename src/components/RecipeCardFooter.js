import React, { Component } from 'react';
import RecipeTag from './RecipeTag';
import './RecipeCard.css';

// var recipeTags = [];

// tags.forEach(function(tagLabel) {
//   recipeTags.push(<RecipeTag label={tagLabel}/>)
// });

class RecipeCardFooter extends Component {
  render() {
    return (
      <div className="recipeCardFooter">
        <div>
          <a href={this.props.link} target="_blank">{this.props.link}</a>
        </div>
        {
          this.props.tags.map(tagLabel => <RecipeTag key={tagLabel} label={tagLabel} />)
        }
      </div>
    );
  }
}

export default RecipeCardFooter;
