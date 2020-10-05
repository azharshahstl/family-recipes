import React from 'react'

class RecipeInput extends React.Component {

    state = {
        name:'', 
        ingredients: '',
        directions: '',
        cuisine: ''
    }

    handleOnSubmit = (event) => {

    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Recipe Name: </label>
                    <input type='text' placeholder='Recipe Name'/>

                </form>
            </div>
        )
    }
}
export default RecipeInput