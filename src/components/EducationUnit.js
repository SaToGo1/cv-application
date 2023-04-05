import React, { Component } from 'react'

class EducationUnit extends Component {
    constructor(props) {
        super(props)

        this.props = props;

        this.state = {
            showCityInput:              false,
            showDate1Input:             false,
            showDate2Input:             false,
            showUniversityTitleInput:   false,
            showDegreeTitleInput:       false,
            showDescriptionInput:       false,
        }
    }

    handleClick = (e) => {
        let who = e.target.getAttribute('who');
        if(who === 'city'){
            this.setState({
                showCityInput: true,
            })
        }
        else if(who === 'date1'){
            this.setState({
                showDate1Input: true,
            })
        }
        else if( who === 'date2' ) {
            this.setState({
                showDate2Input: true,
            })
        }
        else if( who === 'universityTitle' ) {
            this.setState({
                showUniversityTitleInput: true,
            })
        } 
        else if( who === 'degreeTitle' ) {
            this.setState({
                showDegreeTitleInput: true,
            })
        }
        else if( who === 'description' ) {
            this.setState({
                showDescriptionInput: true,
            })
        }
    }

    
    handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            this.setState ({
                showCityInput:              false,
                showDate1Input:             false,
                showDate2Input:             false,
                showUniversityTitleInput:   false,
                showDegreeTitleInput:       false,
                showDescriptionInput:       false,
            })
        }
    }

    handleFocusOut = () => {
        this.setState ({
            showCityInput:              false,
            showDate1Input:             false,
            showDate2Input:             false,
            showUniversityTitleInput:   false,
            showDegreeTitleInput:       false,
            showDescriptionInput:       false,
        })
    }

    actualizeProps = (props) => {
        this.id = props.id;
        this.city = props.city;
        this.date1 = props.date1;
        this.date2 = props.date2;
        this.degreeTitle = props.degreeTitle;
        this.universityTitle = props.universityTitle;
        this.description = props.description;
        this.handleDelete = props.handleDelete;
        this.handleChange = props.handleChange;
    }

    render() {
        const { 
            showCityInput, 
            showDate1Input,
            showDate2Input,
            showUniversityTitleInput,
            showDegreeTitleInput,
            showDescriptionInput,
         } = this.state;
        this.actualizeProps(this.props);
        return (
            <div className='Edu__unit'>
                <div className='Edu__left'>
                    {!showCityInput && (
                        <h4 
                            className='margin0 Edu__city'
                            onClick={this.handleClick}
                            who='city'
                        >
                            {this.city}
                        </h4>
                    )}
                    {showCityInput && (
                        <input 
                            type='text'
                            who='city'
                            idvalue={this.id}
                            className='EduEdit__input EduEdit__city'
                            autoFocus
                            value={this.city}
                            onChange={this.handleChange}
                            onBlur={this.handleFocusOut}
                            onKeyDown={this.handleKeyDown}
                        />
                    )}
                    <div className='Edu__dateDiv'>
                        {!showDate1Input && (
                            <p 
                                className='margin0 Edu__date1'
                                onClick={this.handleClick}
                                who='date1'
                            >
                                {this.date1}
                            </p>
                        )}
                        {showDate1Input && (
                            <input 
                                type='text'
                                who='date1'
                                idvalue={this.id}
                                className='EduEdit__input EduEdit__date'
                                autoFocus
                                value={this.date1}
                                onChange={this.handleChange}
                                onBlur={this.handleFocusOut}
                                onKeyDown={this.handleKeyDown}
                            /> 
                        )}
                        <p className='margin0'> - </p>
                        {!showDate2Input && (
                            <p 
                                className='margin0 Edu__date2'
                                onClick={this.handleClick}
                                who='date2'
                            >
                                {this.date2}
                            </p>
                        )}
                        {showDate2Input && (
                            <input 
                                type='text'
                                who='date2'
                                idvalue={this.id}
                                className='EduEdit__input EduEdit__date'
                                autoFocus
                                value={this.date2}
                                onChange={this.handleChange}
                                onBlur={this.handleFocusOut}
                                onKeyDown={this.handleKeyDown}
                            /> 
                        )}
                    </div>
                </div>
                <div className='Edu__right'>
                    {!showUniversityTitleInput && (
                        <h3 
                            className='Edu__sectionTitle'
                            onClick={this.handleClick}
                            who='universityTitle'
                        >
                            {this.universityTitle}
                        </h3>
                    )}
                    {showUniversityTitleInput && (
                        <input 
                            type='text'
                            who='universityTitle'
                            idvalue={this.id}
                            className='EduEdit__input EduEdit__sectionTitle'
                            autoFocus
                            value={this.universityTitle}
                            onChange={this.handleChange}
                            onBlur={this.handleFocusOut}
                            onKeyDown={this.handleKeyDown}
                        /> 
                    )}
                    {!showDegreeTitleInput && (
                        <p 
                            className='Edu__sectionSubTitle'
                            onClick={this.handleClick}
                            who='degreeTitle'
                        >
                            {this.degreeTitle}
                        </p>
                    )}
                    {showDegreeTitleInput && (
                        <input 
                            type='text'
                            who='degreeTitle'
                            idvalue={this.id}
                            className='EduEdit__input EduEdit__sectionSubTitle'
                            autoFocus
                            value={this.degreeTitle}
                            onChange={this.handleChange}
                            onBlur={this.handleFocusOut}
                            onKeyDown={this.handleKeyDown}
                        /> 
                    )}

                    {!showDescriptionInput && (
                        <p 
                            className='Edu__description'
                            onClick={this.handleClick}
                            who='description'
                        >
                            {this.description}
                        </p>
                    )}
                    {showDescriptionInput && (
                        <textarea
                            type='text'
                            who='description'
                            idvalue={this.id}
                            className='EduEdit__input EduEdit__description'
                            autoFocus
                            value={this.description}
                            onChange={this.handleChange}
                            onBlur={this.handleFocusOut}
                            onKeyDown={this.handleKeyDown}
                        /> 
                    )}
                </div>
                <div className='Edu__deleteButtonDiv'>
                    <button 
                        className='Edu__deleteButton'
                        onClick={this.handleDelete}
                        idvalue={this.id}
                    >
                        DELETE
                    </button>
                </div>
            </div>
        )
    }
}

export default EducationUnit;