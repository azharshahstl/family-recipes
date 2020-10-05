import React from 'react';
import { connect } from 'react-redux'
import RecipesContainer from './RecipesContainer'




class  App extends React.Component {

  render() {
    return(
      <div className="App">
        <RecipesContainer/>
      </div>
    );

  }
  
}

export default connect()(App);
