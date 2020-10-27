export const reloadUser = (foundUser) => {
    return(dispatch) => {

        dispatch({type: 'RELOAD_USER', payload: foundUser})
    }
}