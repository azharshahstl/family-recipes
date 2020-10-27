import React from 'react'
import Recipe from './Recipe'
import { Route, Link } from 'react-router-dom'

const Recipes = (props) => {

    let recipes = props.recipes.recipes

    if (recipes.length === 0){
            
        return ( 
            <div>You have no recipes to display</div>
        )
        
    }
    else {

        return (
            <div className='recipes'>
                <h4 className='recipes-list'>Recipes</h4>
                {recipes.map(recipe => 
                <div key={recipe.id}><Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link></div>)}
                 <Route path='/recipes/:id' render={(routerProps) => <Recipe {...routerProps} recipes={recipes}/>}/>
            </div>
        )
    }
}



export default Recipes