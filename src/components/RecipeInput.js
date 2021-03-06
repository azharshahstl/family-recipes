import React from 'react'
import {addRecipe} from '../actions/addRecipe'
import {connect} from 'react-redux'

class RecipeInput extends React.Component {

    state = {
        name:'', 
        ingredients: '',
        directions: '', 
        cuisine: ''
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        let user = this.props.user.user.user
        this.props.addRecipe(this.state, user.id )
        this.setState({
            name:'', 
            ingredients: '',
            directions: '', 
            cuisine: ''
        })
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    render() {

        return(
            <div className='recipeInput'>
                <h4>Create a New Recipe!</h4>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Recipe Name: </label>
                    <input type='text' placeholder='Recipe Name' value ={this.state.name} name='name' onChange={this.handleOnChange}/><br></br>
                    <label>Ingredients: </label>
                    <input type='textarea' placeholder='Ingredients' value={this.state.ingredients} name='ingredients' onChange={this.handleOnChange}/><br></br>
                    <label>Directions: </label>
                    <input type='textarea' placeholder='Directions' value={this.state.directions} name='directions' onChange={this.handleOnChange}/><br></br>
                    <label>Cuisine: </label>
                    <input type='text' placeholder='Cuisine' value={this.state.cuisine} name='cuisine' onChange={this.handleOnChange}/><br></br>
                    <input type='submit' />

                </form>
            </div>
        )
    }
}

export default connect(null, {addRecipe})(RecipeInput)