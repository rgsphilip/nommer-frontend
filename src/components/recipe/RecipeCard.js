import React, { Component } from 'react';
import {postAuth} from '../../utils/api-helper';
import RecipeCardFooter from './RecipeCardFooter';
import './RecipeCard.css';

function checkStatus(response) {
  //Function found at fetch github: https://github.com/github/fetch 
  //ensures that an OK status code comes back
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); 
    throw error;
  }
}

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags : props.tags.map(tag => tag.tagName)
    };
    this.handleChangeTags = this.handleChangeTags.bind(this);
  }

  handleChangeTags(tags, changed) {
    const body = {
      tag : changed[0],
      recipeId : this.props.id
    };
    return postAuth(`http://localhost:3001/addtag`, body)
      .then(checkStatus)
      .then(() => {
        this.setState({
          tags : tags
        })
      });
  }

  render() {
    return (
      <div className="recipeCard">
        <div>{this.props.title}</div>
        <RecipeCardFooter
          link={this.props.link}
          tags={this.state.tags}
          handleChangeTags={this.handleChangeTags}
        />
      </div>
    );
  }
}

export default RecipeCard;
