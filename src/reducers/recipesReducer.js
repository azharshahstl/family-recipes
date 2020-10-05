export default function recipesReducer(state = {recipes: []}, action) {
    switch(action.type){
     case 'FETCH_RECIPES': 
     return {recipes: action.payload}

     default:
     return state;
    } 
}