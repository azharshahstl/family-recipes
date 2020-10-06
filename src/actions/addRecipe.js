export const addRecipe = (recipe) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/recipes', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'POST', 
            body: JSON.stringify({user_id: 1, recipe})
        })
    }

}
