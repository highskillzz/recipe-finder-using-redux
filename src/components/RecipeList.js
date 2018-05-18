import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
  render() {
    return (
      <div>
        {this.props.recipes.map((recipe, index) => {
          return (
            <RecipeItem key={index} recipe={recipe} favouriteButton={true}/>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return state;
}

export default connect(mapStateToProps, null)(RecipeList);
