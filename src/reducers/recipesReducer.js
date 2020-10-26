export default function recipesReducer(state = {recipes: []}, action) {
    switch(action.type){
        case 'FETCH_RECIPES': 
        console.log(action.payload)
        debugger;
        localStorage.setItem('recipes', JSON.stringify(action.payload))
        return {recipes: action.payload}

     case 'ADD_RECIPE': 
        localStorage.setItem('recipes', action.payload)
        return {...state, recipes: [...state.recipes, action.payload] }

     case 'RELOAD_RECIPES':
         return {recipes: action.payload}


     default:
     return state;
    } 
}