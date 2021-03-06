import React from 'react'
import UserSignup from '../components/UserSignup'
import UserLogin from '../components/UserLogin'
import UserLogout from '../components/UserLogout'
import { Route, Switch} from 'react-router-dom'


class UsersContainer extends React.Component {


    render () {
        return (
            <div>
                <Switch>
                <Route path='/users/new' component={UserSignup}/>
                <Route path='/login' component={UserLogin}/>
                <Route path='/logout' component={UserLogout} />
                </Switch>
            </div>
            
        )
    }

}
    
export default UsersContainer

