import React from 'react'
import Recipe from './Recipe'
import { Route, Link } from 'react-router-dom'

const Recipes  = (props) => {

    console.log(props)
    debugger;

        return (
            <div>
                {props.recipes.map(recipe => 
                <div key={recipe.id}><Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link></div>)}
            </div>
        )
}

export default Recipes