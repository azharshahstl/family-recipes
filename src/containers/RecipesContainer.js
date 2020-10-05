import React from 'react'
import Recipes from '../components/Recipes'
import RecipeInput from '../components/RecipeInput'
import { connect } from 'react-redux'
import fetchRecipes from '../actions/fetchRecipes'

class RecipesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchRecipes()
    }

    render() {

        return(
            <div>
                <RecipeInput/><br></br>
                <Recipes recipes={this.props.recipes}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, {fetchRecipes})(RecipesContainer)