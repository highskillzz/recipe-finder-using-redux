import { SET_RECIPES,FAVOURITE_RECIPE } from './../actions/index';
import { combineReducers } from 'redux';

const INITIAL_STATE = [];

export function recipes (state = INITIAL_STATE, action){
    switch (action.type) {
        case SET_RECIPES:
            return action.items
        default: return state;
    }
};


export function favouriteRecipes(state = INITIAL_STATE, action){
    switch (action.type) {
        case FAVOURITE_RECIPE:
            return [...state,action.recipe]
        default: return state;
    }
};

const rootReducer=combineReducers({recipes,favouriteRecipes});

export default rootReducer;
