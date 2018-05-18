import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from './RecipeItem';
import { Link } from "react-router-dom";
class RecipeList extends Component {
  render() {
    return (
      <div>
      <Link to="/favourites">Favourites</Link>
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
