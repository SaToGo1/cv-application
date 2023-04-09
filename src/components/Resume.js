import '../styles/Resume.css'
import PersonalInformation from './PersonalInformation'
import Education from './Education'
import Experience from './Experience'

const Resume = () => {

    return(
        <div className='Resume'>
            <div className='Resume__body'>
                <div className='Resume__border'></div>
                <div className='Resume__content'> 
                    <PersonalInformation />
                    <hr className="rounded"></hr>
                    <Experience />
                    <hr className="rounded"></hr>
                    <Education />
                </div>
            </div>
        </div>
    )
    
}

export default Resume;