import React from 'react'
import { connect } from 'react-redux'
import  Recipe  from '../components/Recipe'
import RecipeInput from '../components/RecipeInput'
import  Recipes  from '../components/Recipes'
import { reloadUser } from '../actions/reloadUser'

class LoggedInUsersContainer extends React.Component {

  
    render(){
        console.log(this.props.user)
        debugger;
        return(

            <div>
                {this.props.user.user.jwt !== undefined ? <RecipeInput user={this.props.user}/> : null } 
                {/* {this.props.user ? <Recipes isLoggedIn={this.props.user}/> : null} */}
                {/* {this.props.user ? <Recipe isLoggedIn={this.props.user}/>  : null}   */}
            </div>
        )
        }
    
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { reloadUser })(LoggedInUsersContainer)
