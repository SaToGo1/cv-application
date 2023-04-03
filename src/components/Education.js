import React, { Component } from 'react'
import '../styles/EducationAndExperience.css'
import EducationUnit from './EducationUnit'
import uniqid from 'uniqid';

class Education extends Component {
    constructor() {
        super();

        this.state = {
            EducationUnitArray: [{
                id: uniqid(),
                city: "City",
                date1: "date1",
                date2: "date2",
                universityTitle: "UniversityTitle",
                degreeTitle: "Degree Title",
                description: `Description ${(<br/>)}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat augue id ante ullamcorper luctus.`,
            }],

        }
    }

    handleDelete = (e) => {
        let id = e.target.getAttribute('idvalue');
        let testing = e.target.getAttribute('testing');
        console.log(e.target)
        console.log('hi');
        console.log(`id: ${id} || testong: ${testing}`);
    }

    render(){
        const { EducationUnitArray } = this.state;
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
                <button className='Edu__addButton'>Add</button>
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