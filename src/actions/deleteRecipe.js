export const deleteRecipe = (recipe) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${recipe[0].user_id}/recipes/${recipe[0].id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'DELETE'
            })
        .then(response => response.json())
        .then(recipe => {
            dispatch({type: 'DELETE_RECIPE', payload: recipe})
        })
        
    }
    
}