import React from 'react';
import { connect } from 'react-redux';
import RecipesContainer from './RecipesContainer';
import UsersContainer from './UsersContainer'
import '../App.css'
import  NavBar  from '../components/NavBar'
import { reloadUser } from '../actions/reloadUser'
import  LoggedInUsersContainer   from './LoggedInUsersContainer'


class  App extends React.Component {

  reloadUserIntoState(){
    const loggedInUser = localStorage.getItem("user");
    
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      this.props.reloadUser(foundUser)
    }
  }

  componentDidMount() {
    this.reloadUserIntoState()
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

export default connect( mapStateToProps, { reloadUser })(App);
