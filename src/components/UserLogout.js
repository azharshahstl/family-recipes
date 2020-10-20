import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/logoutUser'
import { reloadUser } from '../actions/reloadUser'

class Logout extends React.Component {

    // componentDidMount() {
    //     const loggedInUser = localStorage.getItem("user");
        
    //     if (loggedInUser) {
    //         const foundUser = JSON.parse(loggedInUser);
    //         this.props.reloadUser(foundUser)
    //         this.props.logoutUser(foundUser)
    //         debugger;
    //     }
    // }
    
    render() {
    return(
        <div>{localStorage.clear()}
            <Redirect to='/'/>
            {alert('You have successfully logged out.')}
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, { logoutUser, reloadUser })(Logout)