export const addRecipe = (recipe, userId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${userId}/recipes`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'POST', 
            body: JSON.stringify(recipe)
        })
        .then(resp => resp.json())
        .then(recipe => {
            console.log(recipe)
            debugger;
            if (recipe.error){
                alert(recipe.error)
            }
            else {
                dispatch({type: 'ADD_RECIPE', payload: recipe})
            
            }
        })
    }

}
