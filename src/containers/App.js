import React from 'react';
import { connect } from 'react-redux';
import UsersContainer from './UsersContainer'
import '../App.css'
import  NavBar  from '../components/NavBar'
import { reloadUser } from '../actions/reloadUser'
import  LoggedInUsersContainer   from './LoggedInUsersContainer'
import {reloadRecipes} from '../actions/reloadRecipes'


class  App extends React.Component {

  reloadUserAndRecipesIntoState(){
    const loggedInUser = localStorage.getItem("user");
    const loggedInRecipes = localStorage.getItem('recipes')
    
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      this.props.reloadUser(foundUser)
    }
    if (loggedInRecipes) {
      const foundRecipes = JSON.parse(loggedInRecipes);
      this.props.reloadRecipes(foundRecipes)
    }
  }

  componentDidMount() {
    this.reloadUserAndRecipesIntoState()
  }

  render() {
    return(
      <div className="App">
        <NavBar/>
        <UsersContainer/>
        <LoggedInUsersContainer/> 
      </div>
    );
  }  
}

const mapStateToProps = (state) => {
  return {
    user: state.user}
}

export default connect( mapStateToProps, { reloadUser, reloadRecipes })(App);
