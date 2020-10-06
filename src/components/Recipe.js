import React from 'react'

const Recipe = (props) => {

    console.log(props)
    

    let recipe = props.recipes[props.match.params.id - 1]

    return (
        <li>
            {recipe ? recipe.name : null} - {recipe ? recipe.ingredients : null} - {recipe ? recipe.directions : null}
        </li>
    )


}
export default Recipe