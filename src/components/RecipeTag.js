import React, { Component } from 'react';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

class RecipeTag extends Component {
  constructor() {
    super()
    this.state = {tags: ['vegan', 'mediterranean', 'bowls']}
  }
  handleChange(tags) {
    this.setState({tags})
  }
  render() {
    return (
      <div className="recipeTag">
        {/*<p>{this.props.label}</p>*/}
        <TagsInput value={this.state.tags} onChange={this.handleChange} />
      </div>
    );
  }
}

export default RecipeTag;


// class Example extends React.Component {
//   constructor() {
//     super()
//     this.state = {tags: []}
//   }

//   handleChange(tags) {
//     this.setState({tags})
//   }

//   render() {
//     return <TagsInput value={this.state.tags} onChange={::this.handleChange} />
//   }
// }