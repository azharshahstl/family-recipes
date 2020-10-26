export default function usersReducer(state = {user: {}}, action) {
    

    switch(action.type){
     case 'CREATE_USER':
         console.log(action.payload)
         debugger;
        localStorage.setItem('jwt_token', action.payload.jwt)
        localStorage.setItem('user', JSON.stringify(action.payload))
        return {user: action.payload}

    case 'RELOAD_USER': 
        return {user: action.payload}

    case 'LOGIN_USER': 
        localStorage.setItem('jwt_token', action.payload.jwt)
        action.payload.user.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(action.payload))
    
        return {user: action.payload}

    case 'LOGOUT_USER':
        console.log(action.payload)
        localStorage.clear()
        return {user: action.payload}

     default:
     return state;
    } 
}