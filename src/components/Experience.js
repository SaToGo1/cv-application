import React, { useState } from 'react'
import '../styles/EducationAndExperience.css'
import ExperienceUnit from './ExperienceUnit'
import uniqid from 'uniqid';


const Experience = () => {

    const [showAddForm, setShowAddForm] = useState(false);
    const [ExperienceUnitArray, setExperienceUnitArray] = useState([
        {
                id: uniqid(),
                city: "City",
                date1: "date1",
                date2: "date2",
                role: "Role",
                company: "Company",
                description: `Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat augue id ante ullamcorper luctus.`,
        },
    ])

    const handleDelete = (e) => {
        let id = e.target.getAttribute( 'idvalue' );
        
        setExperienceUnitArray( ExperienceUnitArray.filter( obj => obj.id !== id ) )
    }

    const handleAddButtonShow = () => {
        setShowAddForm( true )
    }

    const handleSubmit = (e) => {
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
        
        setExperienceUnitArray( [...ExperienceUnitArray, experienceUnit], )
        setShowAddForm( false )
    }

    const handleCancelButton = () => {
        setShowAddForm( false )
    }

    const handleChange = (e) => {
        let who = e.target.getAttribute('who');
        let id = e.target.getAttribute('idvalue');

        // Search in the array for the instance of experience unit that has 
        // the same id as we get from the event target, and change the value
        // of the event target state (city, date1, ...) for the new one 
        // as we change value in the event.
        let ExperienceUnitArrayUpdated = ExperienceUnitArray.map(
            (obj) => {
                if(obj.id === id){
                    obj[`${who}`] = e.target.value;
                    return obj;
                }

                return obj;
        })

        setExperienceUnitArray( [...ExperienceUnitArrayUpdated] )
    }


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
                            handleDelete={handleDelete}
                            handleChange={handleChange}
                        />
                    )
                })}
            {!showAddForm && (
                <button 
                    className='Edu__addButton'
                    onClick={handleAddButtonShow}
                >
                    Add
                </button>
            )}
            {showAddForm && (
                <div className='Edu__formDiv'>
                    <button className='Edu__addButton'> Add </button>
                    <form onSubmit={handleSubmit} className='Edu__form'>
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
                                <textarea type="text" name="Edu__description" id="Edu__description" className='Eduform__description'/>
                            </div>
                        </div>
                        <div className="Eduform__buttonsDiv">
                            <button type='submit'> Add </button>
                            <button onClick={handleCancelButton} >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Experience;