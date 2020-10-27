export const reloadRecipes = (foundRecipes) => {
    return(dispatch) => {

        dispatch({type: 'RELOAD_RECIPES', payload: foundRecipes})
    }
}