export const deleteRecipe = (recipe) => {
    return(dispatch) => {
        fetch(`https://git.heroku.com/agile-ocean-22181.git/api/v1/users/${recipe[0].user_id}/recipes/${recipe[0].id}`, {
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