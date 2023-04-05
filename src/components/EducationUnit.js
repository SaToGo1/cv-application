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
    }

    render() {

        return (
            <div className='Edu__unit'>
                <div className='Edu__left'>
                    <h4 className='margin0 Edu__city'>{this.city}</h4>
                    <div className='Edu__dateDiv'>
                        <p className='margin0'>{this.date1}</p>
                        <p className='margin0'> - </p>
                        <p className='margin0'>{this.date2}</p>
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