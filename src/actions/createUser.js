export const createUser = (user) => {

    return (dispatch) => {
        fetch('https://agile-ocean-22181.herokuapp.com/api/v1/users', {
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