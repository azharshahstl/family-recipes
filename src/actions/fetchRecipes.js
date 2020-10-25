export default function fetchRecipes(userId) {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${userId}/recipes`)
        .then(response => response.json())
        .then(recipes=> {
          console.log(recipes)
          debugger;
          dispatch({ type: 'FETCH_RECIPES', payload: recipes })
        })
      }

}