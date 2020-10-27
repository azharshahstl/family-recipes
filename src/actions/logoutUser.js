
export const logoutUser = (user) => {
    console.log(user)
    debugger;
    user.isLoggedIn = false
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'PATCH',
            body: JSON.stringify({user})
        })
        .then(response => response.json())
        .then((user) => dispatch({type: 'LOGOUT_USER', payload: {}}))
    }

}