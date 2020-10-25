import React from 'react'
import Recipe from './Recipe'
import { Route, Link } from 'react-router-dom'
import fetchRecipes from '../actions/fetchRecipes'
import { connect } from 'react-redux'


class Recipes extends React.Component {

    // componentDidMount= ()=> {
    //     debugger;
    //     this.props.fetchRecipes(this.props.user.user.user.id)
    // }

    render() {

    let user = this.props.user
        if (user.recipes === undefined ){
             
            return ( 
                <div>You have no recipes to display</div>
            )
            
        }
        else {

            return (
                <div>
                    {this.props.recipes.map(recipe => 
                    <div key={recipe.id}><Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link></div>)}
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        user: state.user
    }
}

export default connect(mapStateToProps, {fetchRecipes})(Recipes)