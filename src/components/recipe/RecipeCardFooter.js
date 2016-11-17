import React, { Component } from 'react';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.
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
          <TagsInput value={this.props.tags} onChange={this.props.handleChangeTags}/>
      </div>
    );
  }
}

export default RecipeCardFooter;
