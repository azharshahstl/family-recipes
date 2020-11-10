export default function fetchRecipes(userId) {
    return (dispatch) => {
        fetch(`https://git.heroku.com/agile-ocean-22181.git/api/v1/users/${userId}/recipes`)
        .then(response => response.json())
        .then(recipes=> {
          dispatch({ type: 'FETCH_RECIPES', payload: recipes })
        })
      }

}