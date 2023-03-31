import React, { Component } from 'react'
import '../styles/Resume.css'
import PersonalInformation from './PersonalInformation'

class Resume extends Component {
    constructor(){
        super()
    }

    render(){

        return(
            <div className='Resume'>
                <div className='Resume__body'>
                    <div className='Resume__border'></div>
                    <div className='Resume__content'> 
                        <PersonalInformation />
                        <hr className="rounded"></hr>
                        <div> Education </div>
                        <hr className="rounded"></hr>
                        <div> Experience </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;