import React, { Component } from 'react'
import Header from './components/Header'
import Resume from './components/Resume'
import Footer from './components/Footer'

class App extends Component {
  constructor(){
    super();
  }

  render(){

    return(
      <div className='App'>
        <Header />
        <Resume />
        <Footer />
      </div>
    )
  }
}

export default App;