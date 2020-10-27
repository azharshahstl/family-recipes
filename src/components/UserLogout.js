import React from 'react'
import { Redirect } from 'react-router-dom'


const Logout = () => {
    
    
    return(
        <div>{localStorage.clear()}
            <Redirect to='/'/>
            {alert('You have successfully logged out.')}
        </div>
    )
}


export default Logout