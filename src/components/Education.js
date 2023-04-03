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
                        <form>
                            <div>
                                <div>
                                    <label for="Edu_city">city</label>
                                    <input type="text" name="Edu_city" id="Edu_city" />
                                </div>
                                <div>
                                    <label for="Edu_date1">date1</label>
                                    <input type="text" name="Edu_city" id="Edu_city" />

                                    <label for="Edu_date1">date2</label>
                                    <input type="text" name="Edu_city" id="Edu_city" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label for="Edu_universityName">University Name</label>
                                    <input type="text" name="Edu_universityName" id="Edu_universityName" />
                                </div>
                                <div>
                                    <label for="Edu_degreeTitle">Degree Title</label>
                                    <input type="text" name="Edu_degreeTitle" id="Edu_degreeTitle" />
                                </div>
                            </div>
                        </form>
                        <div>
                            <button>Add</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Education;


{/* <div className='Edu__unit'>
                    <div>
                        <h4 className='margin0 Edu__city'>City</h4>
                        <div className='Edu__dateDiv'>
                            <p className='margin0'>date 1</p>
                            <p className='margin0'> - </p>
                            <p className='margin0'>date 2</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='Edu__sectionTitle'>University Title</h3>
                        <p className='Edu__sectionSubTitle'>Degree Title</p>
                        <p className='Edu__description'>
                            Description <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat augue id ante ullamcorper luctus.
                        </p>
                    </div>
                    <div className='Edu__deleteButtonDiv'>
                        <button className='Edu__deleteButton'>DELETE</button>
                    </div>
                </div> */}