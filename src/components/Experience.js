import React, { Component } from 'react'
import '../styles/EducationAndExperience.css'
import ExperienceUnit from './ExperienceUnit'
import uniqid from 'uniqid';


class Experience extends Component {
    constructor() {
        super();
    
        this.state = {
            showAddForm: false,
            ExperienceUnitArray: [{
                id: uniqid(),
                city: "City",
                date1: "date1",
                date2: "date2",
                role: "Role",
                company: "Company",
                description: `Description
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat augue id ante ullamcorper luctus.`,
            }],

        }
    }

    handleDelete = (e) => {
        let id = e.target.getAttribute('idvalue');
        
        this.setState({
            ExperienceUnitArray: this.state.ExperienceUnitArray.filter(obj => obj.id !== id),
        })
    }

    handleAddButtonShow = () => {
        this.setState({
            showAddForm: true,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let experienceUnit = {
                id:                 uniqid(),
                city:               e.target.Edu__city.value,
                date1:              e.target.Edu__date1.value,
                date2:              e.target.Edu__date2.value,
                role:               e.target.Edu__role.value,
                company:            e.target.Edu__company.value,
                description:        e.target.Edu__description.value,
        }
        
        this.setState ({
            ExperienceUnitArray: [...this.state.ExperienceUnitArray, experienceUnit],
            showAddForm: false,
        })
    }

    handleCancelButton = () => {
        this.setState({
            showAddForm: false,
        })
    }

    render(){
        const { ExperienceUnitArray, showAddForm } = this.state;
        return (
            <div className='Education'>
                <h2 className='Edu__Title'>Experience</h2>
                    {ExperienceUnitArray.map((obj) =>{
                        return (
                            <ExperienceUnit 
                                key={obj.id}
                                id={obj.id}
                                city={obj.city}
                                date1={obj.date1}
                                date2={obj.date2}
                                role={obj.role}
                                company={obj.company}
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
                    <div className='Edu__formDiv'>
                        <form onSubmit={this.handleSubmit} className='Edu__form'>
                            <div>
                                <div className='Edu__inputDiv'>
                                    <label htmlFor="Edu__city">city</label>
                                    <input type="text" name="Edu__city" id="Edu__city" />
                                </div>
                                <div className='Edu__inputDiv'>
                                    <label htmlFor="Edu__date1">date1</label>
                                    <input type="text" name="Edu__date1" id="Edu__date1" />
                                </div>
                                <div className='Edu__inputDiv'>
                                    <label htmlFor="Edu__date1">date2</label>
                                    <input type="text" name="Edu__date2" id="Edu__date2" />
                                </div>
                            </div>
                            <div>
                                <div className='Edu__inputDiv'>
                                    <label htmlFor="Edu__role">Role</label>
                                    <input type="text" name="Edu__role" id="Edu__role" />
                                </div>
                                <div className='Edu__inputDiv'>
                                    <label htmlFor="Edu__company">Company</label>
                                    <input type="text" name="Edu__company" id="Edu__company" />
                                </div>
                                <div className='Edu__inputDiv'>
                                    <label htmlFor="Edu__description">Description</label>
                                    <textarea type="text" name="Edu__description" id="Edu__description" />
                                </div>
                            </div>
                            <div className="Eduform__buttonsDiv">
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

export default Experience;