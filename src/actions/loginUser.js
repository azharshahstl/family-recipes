

export const loginUser = (user) => {
    
    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/login', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({user})
        })
        .then(response => response.json())
        .then(user => {
            if (user.error){
                alert(user.error)
            }
            else {
            dispatch({ type: 'LOGIN_USER', payload: user })
            alert ('You have logged in successfully!')
            }
       })

    }

}