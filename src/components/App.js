import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import "../styles/index.css"
import RecipeList from './RecipeList';
import FavouriteRecipeList from './FavouriteRecipeList';
 
class App extends Component {
    render() {
        return (
            <div>
                <h2>Recipe Finder App</h2>
                <SearchRecipes/>
                <RecipeList/>
                <FavouriteRecipeList/>
            </div>
        );
    }
}

export default App;
