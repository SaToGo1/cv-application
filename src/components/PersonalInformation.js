import React, { Component } from 'react'
import '../styles/PersonalInformation.css'
import atIcon from '../img/at.svg'
import phoneIcon from '../img/phone.svg'

class PersonalInformation extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='PersonalInformation'>
                <div className='PerInfo__rightSide'>
                    <div className='PerInfo__NameDiv'>
                        <p className='PerInfo__name'>Name</p>
                        <p className='PerInfo__name'>Surname</p>
                    </div>
                    <div>
                        <p className='PerInfo__title'>Title</p>
                    </div>
                </div>
                <div className='PerInfo__leftSide'>
                    <div className='PerInfo__iconData'>
                        <img src={atIcon} alt='e-mail' className='PerInfo__icon' />
                        <p>E-mail</p>
                    </div>
                    <div className='PerInfo__iconData'>
                        <img src={phoneIcon} alt='phone' className='PerInfo__icon' />
                        <p>Telephone</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalInformation;