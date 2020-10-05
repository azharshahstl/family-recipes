import React from 'react'

const Recipes  = (props) => {
 return (
     <div>
         {props.recipes.map(recipe => <li key={recipe.id}> {recipe.name} - {recipe.ingredients} </li>)}
     </div>
 )
}

export default Recipes