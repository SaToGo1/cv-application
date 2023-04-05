import React, { Component } from 'react'

class ExperienceUnit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showCityInput: false,
            showDate1Input: false,
            showDate2Input: false,
            showRoleInput: false,
        }

        this.props = props
    }

    handleClick = (e) => {
        let who = e.target.getAttribute('who');
        if(who === 'city'){
            this.setState({
                showCityInput: true,
            })
        }
        else if(who === 'date1'){
            this.setState({
                showDate1Input: true,
            })
        }
        else if( who === 'date2' ) {
            this.setState({
                showDate2Input: true,
            })
        }
        else if( who === 'Role' ) {
            this.setState({
                showRoleInput: true,
            })
        }
    }

    handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            this.setState ({
                showCityInput:  false,
                showDate1Input: false,
                showDate2Input: false,
                showRoleInput:  false,
            })
        }
    }

    handleFocusOut = () => {
        this.setState ({
            showCityInput:  false,
            showDate1Input: false,
            showDate2Input: false,
            showRoleInput:  false,
        })
    }

    actualizeProps = (props) => {
        this.id = props.id;
        this.city = props.city;
        this.date1 = props.date1;
        this.date2 = props.date2;
        this.role = props.role;
        this.company = props.company;
        this.description = props.description;
        this.handleDelete = props.handleDelete;
        this.handleChange = props.handleChange;
    }

    render() {
        const { 
            showCityInput, 
            showDate1Input,
            showDate2Input,
            showRoleInput,
         } = this.state;
        this.actualizeProps(this.props);

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
                            idvalue={this.id}
                            className='EduEdit__input EduEdit__city'
                            autoFocus
                            value={this.city}
                            onChange={this.handleChange}
                            onBlur={this.handleFocusOut}
                            onKeyDown={this.handleKeyDown}
                        />
                    )}

                    <div className='Edu__dateDiv'>
                        {!showDate1Input && (
                            <p 
                                className='margin0 Edu__date1'
                                onClick={this.handleClick}
                                who='date1'
                            >
                                {this.date1}
                            </p>
                        )}

                        {showDate1Input && (
                            <input 
                                type='text'
                                who='date1'
                                idvalue={this.id}
                                className='EduEdit__input EduEdit__date'
                                autoFocus
                                value={this.date1}
                                onChange={this.handleChange}
                                onBlur={this.handleFocusOut}
                                onKeyDown={this.handleKeyDown}
                            /> 
                        )}
                        <p className='margin0'> - </p>
                        {!showDate2Input && (
                            <p 
                                className='margin0 Edu__date2'
                                onClick={this.handleClick}
                                who='date2'
                            >
                                {this.date2}
                            </p>
                        )}

                        {showDate2Input && (
                            <input 
                                type='text'
                                who='date2'
                                idvalue={this.id}
                                className='EduEdit__input EduEdit__date'
                                autoFocus
                                value={this.date2}
                                onChange={this.handleChange}
                                onBlur={this.handleFocusOut}
                                onKeyDown={this.handleKeyDown}
                            /> 
                        )}
                    </div>
                </div>
                <div className='Edu__right'>
                    {!showRoleInput && (
                        <h3 
                            className='Edu__sectionTitle'
                            onClick={this.handleClick}
                            who='Role'
                        >
                            {this.role}
                        </h3>
                    )}

                    {showRoleInput && (
                        <input 
                            type='text'
                            who='role'
                            idvalue={this.id}
                            className='EduEdit__input EduEdit__sectionTitle'
                            autoFocus
                            value={this.role}
                            onChange={this.handleChange}
                            onBlur={this.handleFocusOut}
                            onKeyDown={this.handleKeyDown}
                        /> 
                    )}
                    <p className='Edu__sectionSubTitle'>{this.company}</p>
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

export default ExperienceUnit;