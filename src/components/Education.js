import React, { Component } from 'react'
import '../styles/EducationAndExperience.css'
import EducationUnit from './EducationUnit'
import uniqid from 'uniqid';

class Education extends Component {
    constructor() {
        super();

        this.state = {
            showAddForm: false,
            EducationUnitArray: [{
                id: uniqid(),
                city: "City",
                date1: "date1",
                date2: "date2",
                universityTitle: "UniversityTitle",
                degreeTitle: "Degree Title",
                description: `Description
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat augue id ante ullamcorper luctus.`,
            }],

        }
    }

    handleDelete = (e) => {
        let id = e.target.getAttribute('idvalue');
        
        this.setState({
            EducationUnitArray: this.state.EducationUnitArray.filter(obj => obj.id !== id),
        })
    }

    handleAddButtonShow = () => {
        this.setState({
            showAddForm: true,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let educationUnit = {
                id:                 uniqid(),
                city:               e.target.Edu__city.value,
                date1:              e.target.Edu__date1.value,
                date2:              e.target.Edu__date2.value,
                universityTitle:    e.target.Edu__universityName.value,
                degreeTitle:        e.target.Edu__degreeTitle.value,
                description:        e.target.Edu__description.value,
        }
        this.setState ({
            EducationUnitArray: [...this.state.EducationUnitArray, educationUnit],
            showAddForm: false,
        })
    }

    handleCancelButton = () => {
        this.setState({
            showAddForm: false,
        })
    }

    render(){
        const { EducationUnitArray, showAddForm } = this.state;
        return (
            <div className='Education'>
                <h2 className='Edu__Title'>Education</h2>
                    {EducationUnitArray.map((obj) =>{
                        return (
                            <EducationUnit 
                                key={obj.id}
                                id={obj.id}
                                city={obj.city}
                                date1={obj.date1}
                                date2={obj.date2}
                                universityTitle={obj.universityTitle}
                                degreeTitle={obj.degreeTitle}
                                description={obj.description}
                                handleDelete={this.handleDelete}
                            />
                        )
                    })}
                {!showAddForm && (
                    <button 
                        className='Edu__addButton'
                        onClick={this.handleAddButtonShow}
                    >
                        Add
                    </button>
                )}
                {showAddForm && (
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <div>
                                    <label htmlFor="Edu__city">city</label>
                                    <input type="text" name="Edu__city" id="Edu__city" />
                                </div>
                                <div>
                                    <label htmlFor="Edu__date1">date1</label>
                                    <input type="text" name="Edu__date1" id="Edu__date1" />

                                    <label htmlFor="Edu__date1">date2</label>
                                    <input type="text" name="Edu__date2" id="Edu__date2" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="Edu__universityName">University Name</label>
                                    <input type="text" name="Edu__universityName" id="Edu__universityName" required />
                                </div>
                                <div>
                                    <label htmlFor="Edu__degreeTitle">Degree Title</label>
                                    <input type="text" name="Edu__degreeTitle" id="Edu__degreeTitle" />
                                </div>
                                <div>
                                    <label htmlFor="Edu__description">Description</label>
                                    <textarea type="text" name="Edu__description" id="Edu__description" />
                                </div>
                            </div>
                            <div>
                                <button type='submit'> Add </button>
                                <button onClick={this.handleCancelButton} >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        )
    }
}

export default Education;