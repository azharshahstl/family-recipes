export default function recipesReducer(state = {recipes: []}, action) {
    switch(action.type){
     case 'FETCH_RECIPES': 
     return {recipes: action.payload}

     case 'ADD_RECIPE': 
     localStorage.setItem('recipes', action.payload)
     return {...state, recipes: [...state.recipes, action.payload] }


     default:
     return state;
    } 
}