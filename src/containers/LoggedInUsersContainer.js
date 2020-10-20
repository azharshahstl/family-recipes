import React from 'react'
import  Recipe  from '../components/Recipe'
import RecipeInput from '../components/RecipeInput'
import  Recipes  from '../components/Recipes'

export const LoggedInUsersContainer = (props) => {

    console.log(props)
    debugger;

    // const isLoggedIn = props.user.isLoggedIn

    // if (isLoggedIn){
    //   let recipeInput = <RecipeInput/>
    //   let recipes = <Recipes/> 
    //   let recipe = <Recipe/>
    // }

        return(

            <div>
                <RecipeInput isLoggedIn={props.user.isLoggedIn}/>
                <Recipes isLoggedIn={props.user.isLoggedIn}/>
                <Recipe isLoggedIn={props.user.isLoggedIn}/>    
            </div>
        )
    






}
