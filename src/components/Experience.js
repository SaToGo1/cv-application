import React, { Component } from 'react'
import '../styles/EducationAndExperience.css'

class Experience extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className='Education'>
                <h2 className='Edu__Title'>Experience</h2>
                <div className='Edu__unit'>
                    <div>
                        <h4 className='margin0 Edu__city'>City</h4>
                        <div className='Edu__dateDiv'>
                            <p className='margin0'>date 1</p>
                            <p className='margin0'> - </p>
                            <p className='margin0'>date 2</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='Edu__sectionTitle'>Role</h3>
                        <p className='Edu__sectionSubTitle'>Company</p>
                        <p className='Edu__description'>
                            Description <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat augue id ante ullamcorper luctus.
                        </p>
                    </div>
                    <div className='Edu__deleteButtonDiv'>
                        <button className='Edu__deleteButton'>DELETE</button>
                    </div>
                </div>
                <button className='Edu__addButton'>Add</button>
            </div>
        )
    }
}

export default Experience;