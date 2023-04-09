import React, { useState } from 'react'


const ExperienceUnit = ({   
                            id, 
                            city, 
                            date1, 
                            date2, 
                            role, 
                            company,
                            description, 
                            handleDelete, 
                            handleChange 
                        }) => {

    const [showCityInput, setShowCityInput] =               useState( false )
    const [showDate1Input, setShowDate1Input] =             useState( false )
    const [showDate2Input, setShowDate2Input] =             useState( false )
    const [showRoleInput, setShowRoleInput] =               useState( false )
    const [showCompanyInput, setShowCompanyInput] =         useState( false )
    const [showDescriptionInput, setShowDescriptionInput] = useState( false )

    const handleClick = (e) => {
        let who = e.target.getAttribute('who');
        if(who === 'city'){
            setShowCityInput( true )
        }
        else if(who === 'date1'){
            setShowDate1Input( true )
        }
        else if( who === 'date2' ) {
            setShowDate2Input( true )
        }
        else if( who === 'role' ) {
            setShowRoleInput( true )
        }
        else if( who === 'company' ) {
            setShowCompanyInput( true )
        } 
        else if( who === 'description' ) {
            setShowDescriptionInput( true )
        }
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            setShowCityInput( false )
            setShowDate1Input( false )
            setShowDate2Input( false )
            setShowRoleInput( false )
            setShowCompanyInput( false )
            setShowDescriptionInput( false )
        }
    }

    const handleFocusOut = () => {
        setShowCityInput( false )
        setShowDate1Input( false )
        setShowDate2Input( false )
        setShowRoleInput( false )
        setShowCompanyInput( false )
        setShowDescriptionInput( false )
    }

    // actualizeProps = (props) => {
    //     this.id = props.id;
    //     this.city = props.city;
    //     this.date1 = props.date1;
    //     this.date2 = props.date2;
    //     this.role = props.role;
    //     this.company = props.company;
    //     this.description = props.description;
    //     this.handleDelete = props.handleDelete;
    //     this.handleChange = props.handleChange;
    // }

    // render() {
    //     const { 
    //         showCityInput, 
    //         showDate1Input,
    //         showDate2Input,
    //         showRoleInput,
    //         showCompanyInput,
    //         showDescriptionInput,
    //      } = this.state;
    //     this.actualizeProps(this.props);

    return (
        <div className='Edu__unit'>
            <div className='Edu__left'>
                {!showCityInput && (
                    <h4 
                        className='margin0 Edu__city'
                        onClick={handleClick}
                        who='city'
                    >
                        {city}
                    </h4>
                )}
                {showCityInput && (
                    <input 
                        type='text'
                        who='city'
                        idvalue={id}
                        className='EduEdit__input EduEdit__city'
                        autoFocus
                        value={city}
                        onChange={handleChange}
                        onBlur={handleFocusOut}
                        onKeyDown={handleKeyDown}
                    />
                )}

                <div className='Edu__dateDiv'>
                    {!showDate1Input && (
                        <p 
                            className='margin0 Edu__date1'
                            onClick={handleClick}
                            who='date1'
                        >
                            {date1}
                        </p>
                    )}
                    {showDate1Input && (
                        <input 
                            type='text'
                            who='date1'
                            idvalue={id}
                            className='EduEdit__input EduEdit__date'
                            autoFocus
                            value={date1}
                            onChange={handleChange}
                            onBlur={handleFocusOut}
                            onKeyDown={handleKeyDown}
                        /> 
                    )}

                    <p className='margin0'> - </p>

                    {!showDate2Input && (
                        <p 
                            className='margin0 Edu__date2'
                            onClick={handleClick}
                            who='date2'
                        >
                            {date2}
                        </p>
                    )}
                    {showDate2Input && (
                        <input 
                            type='text'
                            who='date2'
                            idvalue={id}
                            className='EduEdit__input EduEdit__date'
                            autoFocus
                            value={date2}
                            onChange={handleChange}
                            onBlur={handleFocusOut}
                            onKeyDown={handleKeyDown}
                        /> 
                    )}
                </div>
            </div>
            <div className='Edu__right'>
                {!showRoleInput && (
                    <h3 
                        className='Edu__sectionTitle'
                        onClick={handleClick}
                        who='role'
                    >
                        {role}
                    </h3>
                )}
                {showRoleInput && (
                    <input 
                        type='text'
                        who='role'
                        idvalue={id}
                        className='EduEdit__input EduEdit__sectionTitle'
                        autoFocus
                        value={role}
                        onChange={handleChange}
                        onBlur={handleFocusOut}
                        onKeyDown={handleKeyDown}
                    /> 
                )}

                {!showCompanyInput && (
                    <p 
                        className='Edu__sectionSubTitle'
                        onClick={handleClick}
                        who='company'
                    >
                        {company}
                    </p>
                )}
                {showCompanyInput && (
                    <input 
                        type='text'
                        who='company'
                        idvalue={id}
                        className='EduEdit__input EduEdit__sectionSubTitle'
                        autoFocus
                        value={company}
                        onChange={handleChange}
                        onBlur={handleFocusOut}
                        onKeyDown={handleKeyDown}
                    /> 
                )}

                {!showDescriptionInput && (
                    <p 
                        className='Edu__description'
                        onClick={handleClick}
                        who='description'
                    >
                        {description}
                    </p>
                )}
                {showDescriptionInput && (
                    <textarea
                        type='text'
                        who='description'
                        idvalue={id}
                        className='EduEdit__input EduEdit__description'
                        autoFocus
                        value={description}
                        onChange={handleChange}
                        onBlur={handleFocusOut}
                        onKeyDown={handleKeyDown}
                    /> 
                )}
                
            </div>
            <div className='Edu__deleteButtonDiv'>
                <button 
                    className='Edu__deleteButton'
                    onClick={handleDelete}
                    idvalue={id}
                >
                    DELETE
                </button>
            </div>
        </div>
    )
}

export default ExperienceUnit;