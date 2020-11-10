export default function recipesReducer(state = {recipes: []}, action) {
    switch(action.type){
        case 'FETCH_RECIPES': 
        localStorage.setItem('recipes', JSON.stringify(action.payload))

        return {recipes: action.payload}

     case 'ADD_RECIPE': 
        localStorage.setItem('recipes', action.payload)

        return {...state, recipes: [...state.recipes, action.payload] }

     case 'RELOAD_RECIPES':
         return {recipes: action.payload}

     case 'DELETE_RECIPE': 
            let updatedRecipes = state.recipes.filter(recipe => recipe.id !== action.payload.id)
            localStorage.setItem('recipes', JSON.stringify(updatedRecipes))
            
            return {...state, recipes: updatedRecipes}

     default:
     return state;
    } 
}