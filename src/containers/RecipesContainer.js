import React from 'react'
import Recipes from '../components/Recipes'
import RecipeInput from '../components/RecipeInput'
import { connect } from 'react-redux'
import fetchRecipes from '../actions/fetchRecipes'
import { Route, Switch} from 'react-router-dom'
import Recipe from '../components/Recipe'

class RecipesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchRecipes()
    }

    render() {

        return(
            <div>
               
                <Route path='/recipes/new' component={RecipeInput}/>
                <Route exact path='/recipes' render={(routerProps) => < Recipes {...routerProps} recipes={this.props.recipes}/>}/>
                <Route path='/recipes/:id' render={(routerProps) => < Recipe {...routerProps} recipes={this.props.recipes}/>}/>
                
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