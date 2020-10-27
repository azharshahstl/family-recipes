import React from 'react'
import { connect } from 'react-redux'
import RecipeInput from '../components/RecipeInput'
import  Recipes  from '../components/Recipes'


class LoggedInUsersContainer extends React.Component {

    // componentDidMount() {
    //     debugger;
    //     if (this.props.user.user.jwt !== undefined)
    //     this.props.fetchRecipes(this.props.user.user.id)
    // }


    render(){
        return(
            <div className='loggedInUser'>
                
                    <div className='welcome'>{this.props.user.user.jwt !== undefined ? <h3>{`Welcome back, ${this.props.user.user.user.name}`}</h3>  : null }</div>
                    <div className='float-child'>{this.props.user.user.jwt !== undefined ? <RecipeInput user={this.props.user}/>  : null }</div>
                    <div className='float-child'>{this.props.user.user.jwt !== undefined ? <Recipes recipes={this.props.recipes}/> : null}</div>
                
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
