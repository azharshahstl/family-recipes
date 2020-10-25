import React from 'react'
import { Redirect } from 'react-router-dom'

const Recipe = (props) => {

    console.log(props)

    let user = props.user.user

    if (user.recipes == undefined){
        return <div>You do not have a recipe to display.</div>
    }
    else {
    

    let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]

            return (
                <li>
                    {/* {recipe ? null : <Redirect to='/recipes'/>} */}
                    {recipe ? recipe.name : null} - {recipe ? recipe.ingredients : null} - {recipe ? recipe.directions : null}
                </li>
            )
    }
}
export default Recipe