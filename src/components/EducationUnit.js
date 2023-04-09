import React, { useState } from 'react'

const EducationUnit =   ({  
                            id, 
                            city, 
                            date1, 
                            date2, 
                            degreeTitle, 
                            universityTitle, 
                            description, 
                            handleDelete, 
                            handleChange 
                        }) => {

    const [showCityInput, setShowCityInput] =                       useState( false )
    const [showDate1Input, setShowDate1Input] =                     useState( false )
    const [showDate2Input, setShowDate2Input] =                     useState( false )
    const [showUniversityTitleInput, setShowUniversityTitleInput] = useState( false )
    const [showDegreeTitleInput, setShowDegreeTitleInput] =         useState( false )
    const [showDescriptionInput, setShowDescriptionInput] =         useState( false )


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
        else if( who === 'universityTitle' ) {
            setShowUniversityTitleInput( true )
        } 
        else if( who === 'degreeTitle' ) {
            setShowDegreeTitleInput( true )
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
            setShowUniversityTitleInput( false )
            setShowDegreeTitleInput( false )
            setShowDescriptionInput( false )
        }
    }

    const handleFocusOut = () => {
        setShowCityInput( false )
        setShowDate1Input( false )
        setShowDate2Input( false )
        setShowUniversityTitleInput( false )
        setShowDegreeTitleInput( false )
        setShowDescriptionInput( false )
    }

    // actualizeProps = (props) => {
    //     this.id = props.id;
    //     this.city = props.city;
    //     this.date1 = props.date1;
    //     this.date2 = props.date2;
    //     this.degreeTitle = props.degreeTitle;
    //     this.universityTitle = props.universityTitle;
    //     this.description = props.description;
    //     this.handleDelete = props.handleDelete;
    //     this.handleChange = props.handleChange;
    // }

    // render() {
    //     const { 
    //         showCityInput, 
    //         showDate1Input,
    //         showDate2Input,
    //         showUniversityTitleInput,
    //         showDegreeTitleInput,
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
                {!showUniversityTitleInput && (
                    <h3 
                        className='Edu__sectionTitle'
                        onClick={handleClick}
                        who='universityTitle'
                    >
                        {universityTitle}
                    </h3>
                )}
                {showUniversityTitleInput && (
                    <input 
                        type='text'
                        who='universityTitle'
                        idvalue={id}
                        className='EduEdit__input EduEdit__sectionTitle'
                        autoFocus
                        value={universityTitle}
                        onChange={handleChange}
                        onBlur={handleFocusOut}
                        onKeyDown={handleKeyDown}
                    /> 
                )}
                {!showDegreeTitleInput && (
                    <p 
                        className='Edu__sectionSubTitle'
                        onClick={handleClick}
                        who='degreeTitle'
                    >
                        {degreeTitle}
                    </p>
                )}
                {showDegreeTitleInput && (
                    <input 
                        type='text'
                        who='degreeTitle'
                        idvalue={id}
                        className='EduEdit__input EduEdit__sectionSubTitle'
                        autoFocus
                        value={degreeTitle}
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

export default EducationUnit;