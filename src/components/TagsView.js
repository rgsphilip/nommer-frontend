import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { hashHistory } from 'react-router';
import {getAuth, postAuth} from '../utils/api-helper';
import TagsSearchBar from './TagsSearchBar';
import TagsField from './TagsField';
import RecipeCard from './RecipeCard';
import './Tags.css';

function checkStatus(response) {
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

class TagsView extends Component {

  constructor(props) {
		super(props);
		this.state = {
			loading : true,
      tags : [],
			recipes : [],
      response : []
		}
    this.handleSearchTags = this.handleSearchTags.bind(this);
    this.clickSearchTag = this.clickSearchTag.bind(this);
	}
	
	componentWillMount() {
		getAuth(`http://localhost:3001/alltags`)
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

  handleSearchTags(tags) {
    const body = {
      tags : tags
    };
    return postAuth(`http://localhost:3001/searchbytag`, body)
      .then(checkStatus)
      .then(function(response){
        return response.json();
      })
      .then((recipes) => {
        this.setState({
          tags : tags,
          recipes : recipes
        })
      });
  }

  clickSearchTag(tag) {
    this.handleSearchTags(this.state.tags.concat(tag));
  }

  render() {
    let tagNames = this.state.response.map( tag => {
			return <TagsField key={tag.id} tagName={tag.tagName} id={tag.id} onClick={this.clickSearchTag}/>
		})
    let recipeNames = this.state.recipes.map( recipe => {
			return <RecipeCard key={recipe.id} title={recipe.recipeName} link={recipe.recipeLink} tags={recipe.tags} id={recipe.id}/>
		})
    return (
      <div>

        <TagsSearchBar tags={this.state.tags} handleSearchTags={this.handleSearchTags}/>

        <Grid>
          <Row className="show-grid">
            <Col sm={16} md={8}>
              <span className="title">Your tagged recipes:</span>
              <br />
              {recipeNames}

            </Col>
            
            <Clearfix visibleSmBlock></Clearfix>

            <Col sm={8} md={4}>
              <span className="title">Your tags:</span>
              <br />
              {tagNames}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TagsView;