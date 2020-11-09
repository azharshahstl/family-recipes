import React from 'react'
import Recipe from './Recipe'
import { Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Button from '../components/Button'

const  Recipes = (props) => {

    const [count, setCount] = useState(0);

    // const increaseLikes = (event) => {
    //     console.log(event)
    //     debugger;

    // }


    // let noLikes = 'This Recipe as no likes'
    
    // let likes = `This Recipe has ${count} likes`
        

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
                    <div key={recipe.id}><Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                        <Button/>
                    </div>
                )}
                 <Route path='/recipes/:id' render={(routerProps) => <Recipe {...routerProps} recipes={recipes}/>}/>
            </div>
        )
    }
}



export default Recipes