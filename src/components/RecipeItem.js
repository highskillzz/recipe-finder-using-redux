import React, { Component } from "react";
import { favouriteRecipe } from "../actions";
import { connect } from "react-redux";

class RecipeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false
    };
  }
  favourite(recipe) {
    this.props.favouriteRecipe(recipe);
    this.setState({ favourite: true });
  }

  render() {
    let { recipe } = this.props;

    return (
      <div>
        <div className="recipe-item">
          {this.props.favouriteButton ? (
            this.state.favourite ? (
              <div className="star">&#9733; </div>
            ) : (
              <div
                className="star"
                onClick={() => {
                  this.favourite(recipe);
                }}
              >
                &#9734;{" "}
              </div>
            )
          ) : (
            <div />
          )}

          <div className="recipe-text">
            <a href={recipe.href}>
              <h4>{recipe.title}</h4>
            </a>
            <p>{recipe.ingredients}</p>
          </div>
          <img
            src={recipe.thumbnail}
            className="recipe-img"
            alt={recipe.title}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, { favouriteRecipe })(RecipeItem);
