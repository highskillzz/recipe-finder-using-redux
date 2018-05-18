import React, { Component } from "react";
import axios from "axios";
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Button
} from "react-bootstrap";
import {connect} from "react-redux";
import {setRecipes} from "../actions/index"



class SearchRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: "",
      dish: ""
    };
    this.search = this.search.bind(this);
  }

  search() {
    const url = `http://www.recipepuppy.com/api/?i=${
      this.state.ingredients
    }&q=${this.state.dish}`;

    axios
      .get(url)
      .then(resp => {
        this.props.setRecipes(resp.data.results);
      });
  }
  render() {
    return (
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>{" "}
          <FormControl
            type="text"
            placeholder="garlic, chicken"
            onChange={event => {
              this.setState({ ingredients: event.target.value });
            }}
          />
        </FormGroup>{" "}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>{" "}
          <FormControl
            type="text"
            placeholder="adobo"
            onChange={event => {
              this.setState({ dish: event.target.value });
            }}
          />
        </FormGroup>{" "}
        <Button onClick={this.search}>Submit</Button>
      </Form>
    );
  }
}

export default connect(null, {setRecipes})(SearchRecipes)