import React, { Component } from 'react'
import '../styles/PersonalInformation.css'
import atIcon from '../img/at.svg'
import phoneIcon from '../img/phone.svg'

class PersonalInformation extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className='PersonalInformation'>
                <div className='PersonalInformation__rightSide'>
                    <div className='PersonalInformation__NameDiv'>
                        <p className='PersonalInformation__name'>Name</p>
                        <p className='PersonalInformation__name'>Surname</p>
                    </div>
                    <div>
                        <p className='PersonalInformation__title'>Title</p>
                    </div>
                </div>
                <div className='PersonalInformation__leftSide'>
                    <div className='PersonalInformation__iconData'>
                        <img src={atIcon} alt='e-mail' className='PersonalInformation__icon' />
                        <p>E-mail</p>
                    </div>
                    <div className='PersonalInformation__iconData'>
                        <img src={phoneIcon} alt='phone' className='PersonalInformation__icon' />
                        <p>Telephone</p>
                    </div>
                </div>

                <hr className="rounded"></hr>
            </div>
        )
    }
}

export default PersonalInformation;