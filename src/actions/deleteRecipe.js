export const deleteRecipe = (recipe) => {
    return(dispatch) => {
        fetch(`https://agile-ocean-22181.herokuapp.com/api/v1/users/${recipe[0].user_id}/recipes/${recipe[0].id}`, {
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