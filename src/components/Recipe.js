import React from 'react'
import { Redirect } from 'react-router-dom'

const Recipe = (props) => {

    console.log(props)
    

    let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]

    if(!this.props.user.isLoggedIn){
            return null;
        }
        else {

            return (
                <li>
                    {/* {recipe ? null : <Redirect to='/recipes'/>} */}
                    {recipe ? recipe.name : null} - {recipe ? recipe.ingredients : null} - {recipe ? recipe.directions : null}
                </li>
            )
        }
}
export default Recipe