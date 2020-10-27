import React from 'react'

const Recipe = (props) => {

    console.log(props)
    debugger;

    const recipes = props.recipes

    debugger;

    // if (recipes.length === 0 || props.match === undefined){
    //     return <div>You have not selected a recipe to display.</div>
    // }
    // else {
        console.log(recipes)
        debugger;
        let recipe = recipes.filter(recipe => recipe.id == props.match.params.id)
        console.log(recipe)
        debugger;

            return (
                <div className='recipe'>
                    <li>
                    <h4>Detailed Recipe</h4>
                        {recipe[0] ? recipe[0].name : null} - {recipe ? recipe[0].ingredients : null} - {recipe ? recipe[0].directions : null}
                    </li>
                </div>
            )
    // }
}
export default Recipe