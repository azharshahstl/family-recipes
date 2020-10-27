import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/createUser'

class UserSignup extends React.Component {
    state = {
        name:'', 
        email: '',
        password: '',
        isLoggedIn: true,
    }


    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.createUser(this.state);
        this.setState({
            name:'', 
            email: '',
            password: ''
        })
        document.getElementById('signUpForm').remove()
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit} id='signUpForm' className='form'>
                    <label>Enter User or Family Name:</label>
                    <input type='text' placeholder='name' name='name' value={this.state.name} onChange={this.handleOnChange}/><br></br>
                    <label>Enter Your Email:</label>
                    <input type='text' placeholder='email' name='email' value={this.state.email} onChange={this.handleOnChange}/><br></br>
                    <label>Enter Your Password:</label>
                    <input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.handleOnChange}/><br></br>
                    <button type='submit'>Create User</button>
                </form>
            </div>
        )
    }   
}
export default connect(null, { createUser })(UserSignup)