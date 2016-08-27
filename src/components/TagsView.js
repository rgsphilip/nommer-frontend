import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import TagsSearchBar from './TagsSearchBar';
import TagsSearchResults from './TagsSearchResults';
import TagsField from './TagsField';

class TagsView extends Component {

  constructor(props) {
		super(props);
		this.state = {
			loading : true,
			response : []
		}
	}
	
	componentWillMount() {
		fetch(`http://localhost:3001/alltags`, {
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
    let tagNames = this.state.response.map( tag => {
			return <TagsField key={tag.id} tagName={tag.tagName} id={tag.id}/>
		})
    return (
      <div>
        <TagsSearchBar />

        <Grid>
          <Row className="show-grid">
            <Col sm={16} md={8}>
              <TagsSearchResults />
            </Col>
            
            <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>

            <Col sm={8} md={4}>
              Your tags:
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