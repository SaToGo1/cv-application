import React, { Component } from 'react'
import '../styles/Header.css'

class Header extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className='pageHeader'>
                <a href="https://github.com/SaToGo1" className='githubA'>
                    <div className='headerDiv'>
                        <h1 className='pageHeader__title'>CvMaker</h1>
                        <img className="headerGithub" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABp0lEQVRIS7WVgTHFQBCG36sAFYgKUIGoABV4KkAFogJ08FTwqEBUgA6eDqiA/cxu5s/NJS8xk5vZueSy9/+7/91u5rOJx3xi/NkQglML4sTswI2Y3t1qmx/7guwjAPjOrNiQ5dq+X5s95fy6CCpzvhkp370TtbblCP4DHqAP9nClDClBaR9f3OHZZsgWZpe+9uHzvs/ov3Sfc187U7lSAvTcdcdbJ+B12+wrkUzXNGsw9sJXCTjUlYAQHdEPGUqA/4Vn1rqmpBpp4nRsVg9BNx+u8FsuOM0AsCN3Qms2jRm6nzo5ZLMSoPGWI77aXI5B92wjwAZbCX4EcBICTZFsdkZmoAp82t4ilWhpC3rIlD/VOWRQXLSVGM0NVInQPIrs28+jspnqTGsggKgFgkoDyV5TNq0dmCtKVJERVb0QIoDJmEPlWUcjD4tdrYKIuWYBolUdYHxTSWO9VT+5Zhd6ZrujhFrZc9pxNza72B8kFAzZRFNTKVKCXJa9f7TSJaL55TYHAZpzPnVyFn+vXT8c9YWILMhGB62kMMv+ycJxCEEusMFrkxP8AojlVhnlisGzAAAAAElFTkSuQmCC"/>
                    </div>
                </a>
            </div>
        )
    }
}

export default Header;