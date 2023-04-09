import React, { useState } from 'react'
import '../styles/PersonalInformation.css'
import atIcon from '../img/at.svg'
import phoneIcon from '../img/phone.svg'

const PersonalInformation = () => {

    const [showNameInput, setShowNameInput] = useState(false);
    const [showSurNameInput, setShowSurNameInput] = useState(false);
    const [showTitleInput, setShowTitleInput] = useState(false);
    const [showMailInput, setShowMailInput] = useState(false);
    const [showTelephoneInput, setShowTelephoneInput] = useState(false);
    
    const [information, setInformation] = useState(
        {
            name: "name",
            surname: "surname",
            title: "Title",
            mail: "E-mail",
            telephone: "telephone"
        }
    )

/*  =============== 
    Name Handlers
    =============== */

        const handleNameClick = () => {
            setShowNameInput(true)
        }

        const handleNameChange = (e) => {
            setInformation(
                {
                    ...information,
                    name: e.target.value,
                }
            )
        }

/*  =============== 
    Surname Handlers
    =============== */

        const handleSurNameClick = () => {
            setShowSurNameInput( true )
        }

        const handleSurNameChange = (e) => {
            setInformation(
                {
                    ...information,
                    surname: e.target.value,
                }
            )
        }

/*  =============== 
    Title Handlers
    =============== */
        const handleTitleClick = () => {
            setShowTitleInput( true )
        }

        const handleTitleChange = (e) => {
            setInformation(
                {
                    ...information,
                    title: e.target.value,
                }
            )
        }

/*  =============== 
    Mail Handlers
    =============== */
        const handleMailClick = () => {
            setShowMailInput( true )
        }

        const handleMailChange = (e) => {
            setInformation(
                {
                    ...information,
                    mail: e.target.value,
                }
            )
        }

/*  =============== 
    Telephone Handlers
    =============== */
        const handleTelephoneClick = () => {
            setShowTelephoneInput( true )
        }

        const handleTelephoneChange = (e) => {
            setInformation(
                {
                    ...information,
                    telephone: e.target.value,
                }
            )
        }

/*  =============== 
    General Handlers
    =============== */

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            setShowNameInput( false )
            setShowSurNameInput( false )
            setShowTitleInput( false )
            setShowMailInput( false )
            setShowTelephoneInput( false )
        }
    }

    const handleFocusOut = () => {
        setShowNameInput( false )
        setShowSurNameInput( false )
        setShowTitleInput( false )
        setShowMailInput( false )
        setShowTelephoneInput( false )
    }


    const { name, surname, title, mail, telephone } = information;

    return(
        <div className='PersonalInformation'>
            <div className='PerInfo__rightSide'>
                <div className='PerInfo__NameSurnameDiv'>
                    
                    {!showNameInput && (
                        <p 
                            className='PerInfo__name'
                            onClick={handleNameClick}
                        >
                            {name}
                        </p>
                    )}

                    {showNameInput && (
                        <input 
                            type='text' 
                            autoFocus 
                            className='PerInfo__Input PerInfo__editName' 
                            value={name}
                            onChange={handleNameChange}
                            onBlur={handleFocusOut}
                            onKeyDown={handleKeyDown}
                        />
                    )}
                    

                    {!showSurNameInput && (
                        <p 
                            className='PerInfo__name'
                            onClick={handleSurNameClick}
                        >
                            {surname}
                        </p>
                    )}

                    {showSurNameInput && (
                        <input 
                            type='text' 
                            autoFocus 
                            className='PerInfo__Input PerInfo__editName' 
                            value={surname}
                            onChange={handleSurNameChange}
                            onBlur={handleFocusOut}
                            onKeyDown={handleKeyDown}
                        />
                    )}
                </div>
                <div className='PerInfo__titleDiv'>
                    {!showTitleInput && (
                        <p 
                            className='PerInfo__title'
                            onClick={handleTitleClick}
                        >
                            {title}
                        </p>
                    )}

                    {showTitleInput && (
                        <input
                            type='text' 
                            autoFocus 
                            className='PerInfo__Input PerInfo__editTitle'
                            value={title}
                            onChange={handleTitleChange}
                            onBlur={handleFocusOut}
                            onKeyDown={handleKeyDown}
                        />
                    )}
                </div>
            </div>
            <div className='PerInfo__leftSide'>
                <div className='PerInfo__iconData'
                    onClick={handleMailClick}
                >
                    <img src={atIcon} alt='e-mail' className='PerInfo__icon' />
                    {!showMailInput && (
                        <p
                            onClick={handleMailClick}
                        >
                            {mail}
                        </p> 
                    )}

                    {showMailInput && (
                        <input
                            type='text' 
                            autoFocus 
                            className='PerInfo__Input perInfo__editMailTelephone'
                            value={mail}
                            onChange={handleMailChange}
                            onBlur={handleFocusOut}
                            onKeyDown={handleKeyDown}
                        />
                    )}
                </div>
                <div className='PerInfo__iconData'
                    onClick={handleTelephoneClick}
                >
                    <img src={phoneIcon} alt='phone' className='PerInfo__icon' />
                    {!showTelephoneInput && (
                        <p
                            onClick={handleTelephoneClick}
                        >
                            {telephone}
                        </p> 
                    )}

                    {showTelephoneInput && (
                        <input
                            type='text' 
                            autoFocus 
                            className='PerInfo__Input perInfo__editMailTelephone'
                            value={telephone}
                            onChange={handleTelephoneChange}
                            onBlur={handleFocusOut}
                            onKeyDown={handleKeyDown}
                        />
                    )}
                </div>
            </div>
        </div>
    )

}

export default PersonalInformation;