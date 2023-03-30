import React, { Component } from 'react'
import Header from './components/Header'
import Resume from './components/Resume'

class App extends Component {
  constructor(){
    super();
  }

  render(){

    return(
      <div className='App'>
        <Header />
        <Resume />
      </div>
    )
  }
}

export default App;