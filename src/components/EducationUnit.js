import React, { Component } from 'react'

class EducationUnit extends Component {
    constructor(props) {
        super(props)

        this.id = props.id;
        this.city = props.city;
        this.date1 = props.date1;
        this.date2 = props.date2;
        this.universityTitle = props.universityTitle;
        this.degreeTitle = props.degreeTitle;
        this.description = props.description;
        this.handleDelete = props.handleDelete;
        this.handleChange = props.handleChange;

        this.state = {
            showCityInput: false,
        }
    }

    handleClick = (e) => {
        let who = e.target.getAttribute('who');
        if(who === 'city'){
            this.setState({
                showCityInput: true,
            })
        }
    }

    handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            this.setState ({
                showCityInput: false,
            })
        }
    }

    handleFocusOut = () => {
        this.setState ({
            showCityInput: false,
        })
    }

    render() {
        const { showCityInput } = this.state;
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
                            autoFocus
                            className='EduEdit__input EduEdit__city'
                            value={this.city}
                            onBlur={this.handleFocusOut}
                            onKeyDown={this.handleKeyDown}
                        />
                    )}
                    <div className='Edu__dateDiv'>
                        <p className='margin0 Edu__date1'>{this.date1}</p>
                        <p className='margin0'> - </p>
                        <p className='margin0 Edu__date2'>{this.date2}</p>
                    </div>
                </div>
                <div className='Edu__right'>
                    <h3 
                        className='Edu__sectionTitle'
                        onClick={this.handleClick}
                    >
                        {this.universityTitle}
                    </h3>
                    <p className='Edu__sectionSubTitle'>{this.degreeTitle}</p>
                    <p className='Edu__description'>{this.description}</p>
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