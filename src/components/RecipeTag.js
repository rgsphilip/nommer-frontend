import React, { Component } from 'react';


class RecipeTag extends Component {

  render() {
    return (
      <div className="recipeTag">
        {/*<p>{this.props.label}</p>*/}
        
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