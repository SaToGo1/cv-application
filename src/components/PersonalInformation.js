import React, { Component } from 'react'
import '../styles/PersonalInformation.css'
import atIcon from '../img/at.svg'
import phoneIcon from '../img/phone.svg'

class PersonalInformation extends Component {
    constructor(){
        super()

        this.state = {
            showNameInput: false,
            showSurNameInput: false,
            showTitleInput: false,
            showMailInput: false,
            showTelephoneInput: false,
            information: {
                name: "name",
                surname: "surname",
                title: "Title",
                mail: "E-mail",
                telephone: "telephone"
            },
        };
    }

/*  =============== 
    Name Handlers
    =============== */

        handleNameClick = () => {
            this.setState ({
                showNameInput: true,
            })
        }

        handleNameChange = (e) => {
            const information = this.state.information;
            this.setState ({
                information: {
                    ...information,
                    name: e.target.value,
                },
            })
        }

/*  =============== 
    Surname Handlers
    =============== */

        handleSurNameClick = () => {
            this.setState ({
                showSurNameInput: true,
            })
        }

        handleSurNameChange = (e) => {
            const information = this.state.information;
            this.setState ({
                information: {
                    ...information,
                    surname: e.target.value,
                },
            })
        }

/*  =============== 
    Title Handlers
    =============== */
        handleTitleClick = () => {
            this.setState ({
                showTitleInput: true,
            })
        }

        handleTitleChange = (e) => {
            const information = this.state.information;
            this.setState ({
                information: {
                    ...information,
                    title: e.target.value,
                },
            })
        }

/*  =============== 
    Mail Handlers
    =============== */
        handleMailClick = () => {
            this.setState ({
                showMailInput: true,
            })
        }

        handleMailChange = (e) => {
            const information = this.state.information;
            this.setState ({
                information: {
                    ...information,
                    mail: e.target.value,
                },
            })
        }

/*  =============== 
    Telephone Handlers
    =============== */
        handleTelephoneClick = () => {
            this.setState ({
                showTelephoneInput: true,
            })
        }

        handleTelephoneChange = (e) => {
            const information = this.state.information;
            this.setState ({
                information: {
                    ...information,
                    telephone: e.target.value,
                },
            })
        }

/*  =============== 
    General Handlers
    =============== */

    handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            this.setState ({
                showNameInput: false,
                showSurNameInput: false,
                showTitleInput: false,
                showMailInput: false,
                showTelephoneInput: false,
            })
        }
    }

    handleFocusOut = () => {
        this.setState ({
            showNameInput: false,
            showSurNameInput: false,
            showTitleInput: false,
            showMailInput: false,
            showTelephoneInput: false,
        })
    }

    render(){
        const { name, surname, title, mail, telephone } = this.state.information;
        const { showNameInput, showSurNameInput, showTitleInput, showMailInput, showTelephoneInput } = this.state;

        return(
            <div className='PersonalInformation'>
                <div className='PerInfo__rightSide'>
                    <div className='PerInfo__NameSurnameDiv'>
                        
                        {!showNameInput && (
                            <p 
                                className='PerInfo__name'
                                onClick={this.handleNameClick}
                            >
                                {name}
                            </p>
                        )}

                        {showNameInput && (
                            <input 
                                type='text' 
                                autoFocus 
                                className='PerInfo__Input' 
                                value={name}
                                onChange={this.handleNameChange}
                                onBlur={this.handleFocusOut}
                                onKeyDown={this.handleKeyDown}
                            />
                        )}
                        

                        {!showSurNameInput && (
                            <p 
                                className='PerInfo__name'
                                onClick={this.handleSurNameClick}
                            >
                                {surname}
                            </p>
                        )}

                        {showSurNameInput && (
                            <input 
                                type='text' 
                                autoFocus 
                                className='PerInfo__Input' 
                                value={surname}
                                onChange={this.handleSurNameChange}
                                onBlur={this.handleFocusOut}
                                onKeyDown={this.handleKeyDown}
                            />
                        )}
                    </div>
                    <div className='PerInfo__titleDiv'>
                        {!showTitleInput && (
                            <p 
                                className='PerInfo__title'
                                onClick={this.handleTitleClick}
                            >
                                {title}
                            </p>
                        )}

                        {showTitleInput && (
                            <input
                                type='text' 
                                autoFocus 
                                className='PerInfo__Input'
                                value={title}
                                onChange={this.handleTitleChange}
                                onBlur={this.handleFocusOut}
                                onKeyDown={this.handleKeyDown}
                            />
                        )}
                    </div>
                </div>
                <div className='PerInfo__leftSide'>
                    <div className='PerInfo__iconData'>
                        <img src={atIcon} alt='e-mail' className='PerInfo__icon' />
                        {!showMailInput && (
                            <p
                                onClick={this.handleMailClick}
                            >
                                {mail}
                            </p> 
                        )}

                        {showMailInput && (
                            <input
                                type='text' 
                                autoFocus 
                                className='PerInfo__Input'
                                value={mail}
                                onChange={this.handleMailChange}
                                onBlur={this.handleFocusOut}
                                onKeyDown={this.handleKeyDown}
                            />
                        )}
                    </div>
                    <div className='PerInfo__iconData'>
                        <img src={phoneIcon} alt='phone' className='PerInfo__icon' />
                        {!showTelephoneInput && (
                            <p
                                onClick={this.handleTelephoneClick}
                            >
                                {telephone}
                            </p> 
                        )}

                        {showTelephoneInput && (
                            <input
                                type='text' 
                                autoFocus 
                                className='PerInfo__Input'
                                value={telephone}
                                onChange={this.handleTelephoneChange}
                                onBlur={this.handleFocusOut}
                                onKeyDown={this.handleKeyDown}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalInformation;