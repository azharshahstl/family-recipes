export const createUser = (user) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'POST', 
            body: JSON.stringify({user})
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error){
                alert(user.error)
            }
            else {
            dispatch({ type: 'CREATE_USER', payload: user })
            alert ('You are signed up and logged in.')
            }
       })
    }

}