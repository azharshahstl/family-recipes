import React from 'react'
import { connect } from 'react-redux'
import  Recipe  from '../components/Recipe'
import RecipeInput from '../components/RecipeInput'
import  Recipes  from '../components/Recipes'


class LoggedInUsersContainer extends React.Component {

    componentDidMount() {
        debugger;
        if (this.props.user.user.jwt !== undefined)
        this.props.fetchRecipes(this.props.user.user.id)
    }


    render(){
        console.log(this.props.user)
        debugger;

        return(

            <div>
                {this.props.user.user.jwt !== undefined ? <RecipeInput user={this.props.user}/>  : null } 
                {this.props.user.user.jwt !== undefined ? <Recipes user={this.props.user}/> : null}
                {this.props.user.user.jwt !== undefined ? <Recipe user={this.props.user}/>  : null}  
            </div>
        )
        }
    
}

const mapStateToProps = (state) => {
    return {
        user: state.user, 
        recipes: state.recipes
    }
}

export default connect(mapStateToProps)(LoggedInUsersContainer)
