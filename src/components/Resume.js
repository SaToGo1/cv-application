import React, { Component } from 'react'
import '../styles/Resume.css'

class Resume extends Component {
    constructor(){
        super()
    }

    render(){

        return(
            <div className='Resume'>
                <div className='Resume__body'>
                    <div className='Resume__border'> border </div>
                    <div className='Resume__personalInformation'> Personal information </div>
                    <div className='Resume__Education'> Education </div>
                    <div className='Resume__Experience'> Experience </div>
                </div>
            </div>
        )
    }
}

export default Resume;