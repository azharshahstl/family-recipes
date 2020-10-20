import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import recipesReducer from './reducers/recipesReducer'
import usersReducer from './reducers/usersReducer' 
import { BrowserRouter as Router } from 'react-router-dom'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  recipes: recipesReducer,
  user: usersReducer
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
  <Router>
  <App />
  </Router>
  </Provider>,
  
  document.getElementById('root'));

