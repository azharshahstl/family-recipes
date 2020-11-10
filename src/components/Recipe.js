import React from 'react'
import { connect } from 'react-redux'
import { deleteRecipe } from '../actions/deleteRecipe'

class Recipe extends React.Component {

    handleDelete = (recipe) => {
        this.props.deleteRecipe(recipe)
    }
        
    render(){
        const recipes = this.props.recipes

        let recipe = recipes.filter(recipe => recipe.id == parseInt(this.props.match.params.id))

            return (
                <div className='recipe'>
                    
                    <h4 className='recipe-details'>Detailed Recipe</h4>
                    <h4>Name:</h4>{recipe[0] ? recipe[0].name : null} 
                    <h4>Ingredients:</h4>{recipe ? recipe[0].ingredients : null} 
                    <h4>Directions:</h4>{recipe ? recipe[0].directions : null}
                    <button onClick={() => this.handleDelete(recipe)}>Delete Recipe</button>
                </div>
            )
    }
}
export default connect(null, { deleteRecipe })(Recipe)