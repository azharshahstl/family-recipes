import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/loginUser'

class UserLogin extends React.Component {

    state = { 
        email: '',
        password: '',
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.loginUser(this.state);
        this.setState({
            email: '',
            password: '',
        })
        document.getElementById('logInForm').remove()
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
             <div>
                    <form onSubmit={this.handleOnSubmit} id='logInForm'>
                        <label>Enter Your Email:</label>
                        <input type='text' placeholder='email' name='email' value={this.state.email} onChange={this.handleOnChange}/><br></br>
                        <label>Enter Your Password:</label>
                        <input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.handleOnChange}/><br></br>
                        <button type='submit'>Log in User</button>
                    </form>
            </div>
            );
    }  
}
export default connect(null, { loginUser })(UserLogin);