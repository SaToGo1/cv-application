import React, { Component } from 'react'
import '../styles/Header.css'

class Header extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className='pageHeader'>
                <h1 className='pageHeader__title'>CvMaker</h1>
            </div>
        )
    }
}

export default Header;