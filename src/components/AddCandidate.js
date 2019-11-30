import React, { Component } from 'react'
import { addCandidate } from '../actions/Candidateactions'
import {connect} from 'react-redux'
import Select from 'react-select';


const availabilityOptions = [
    {value: 'immediately', label: 'immediately'},
    {value: '1 week', label: '1 week'},
    {value: '2 week', label: '2 week'},
    {value: '3 week', label: '3 week'},
    {value: '4 week', label: '4 week'},
    {value: '6 week', label: '6 week'}
];

const locationOptions = [
    {value: 'Dubai', label: 'Dubai', id:'location'},
    {value: 'Abu Dhabi', label: 'Abu Dhabi', id:'location'},
    {value: 'Ras Al Khaimah', label: 'Ras Al Khaimah', id:'location'},
    {value: 'Sharjah', label: 'Sharjah', id:'location'}
];

const positionOptions = [
    {value: 'Frontend Developer', label: 'Frontend Developer', id:'position'},
    {value: 'Backend Developer', label: 'Backend Developer',id:'position'},
    {value: 'Fullstack Developer', label: 'Fullstack Developer', id:'position'},
    {value: 'Teamlead Developer', label: 'Teamlead Developer', id:'position'},
    {value: 'QA Developer', label: 'QA Developer', id:'position'}
];

const experienceOptions = [
    {value: '1 year', label: '1 year'},
    {value: '2 year', label: '2 year'},
    {value: '3 year', label: '3 year'},
    {value: '4 year', label: '4 year'},
    {value: '5 year', label: '5 year'},
    {value: '6 year', label: '6 year'},
    {value: '7+ year', label: '7+ year'},
];


class AddCandidate extends Component {

    state = {
        name: '',
        position: '',
        location: '',
        availability: '',
        experience: '',
        photo: '',
        selectedOption: null
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        })
    }

    handleLoadLocalFile = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        const localImageUrl = window.URL.createObjectURL(file);
        // this.props.onFileLoaded(localImageUrl);
        this.setState({
            photo: localImageUrl
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {name, position, location, experience, availability, photo} = this.state;
        
        this.props.addNewCandidate(
            Math.random(),
            name,
            position,
            location,
            experience,
            availability,
            photo
        );
        this.setState({
            name: '',
            position: '',
            location: '',
            experience: '',
            availability: '',
            photo: ''
        });
    }

    handlePosition = (selectedOption) => {
        console.log(selectedOption)
        this.setState({
            selectedPositionOption: selectedOption,
            [selectedOption.id]: selectedOption.value
         });
    };
    handleLocation = (selectedOption) => {
        console.log(selectedOption)
        this.setState({
            selectedLocationOption: selectedOption,
            [selectedOption.id]: selectedOption.value
         });
    };

    render() {
        console.log(this.state);


        return (
            <div>
                <form onSubmit={this.handleSubmit} className="container">
                    <br />
                    
                    
                    <div className="row">
                        <div className="col s4 m3">
                            {this.state.photo ? 
                            (<img className="candidatephoto" src={this.state.photo} alt="candidate" />):(
                                <div className="candidatephoto grey lighten-2 center grey-text">
                                    photo
                                </div>
                            )
                            }
                        </div>
                        <div className="col s8 m9">
                            <div className = "file-field input-field">
                                <div className = "btn">
                                    <span>Browse</span>
                                    <input 
                                        type = "file"
                                        accept=".jpg, .jpeg, .png"
                                        onChange={this.handleLoadLocalFile}
                                        required
                                    />
                                </div>
                                
                                <div className = "file-path-wrapper">
                                    <input className ="file-path validate" type = "text"
                                        placeholder = "Upload file" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-field">
                        <label htmlFor="name">Full name</label>
                        <input id="name" type="text" onChange={this.handleChange} value={this.state.name} required />
                    </div>

                    {/* position dropdown */}
                    <div className="input-field">
                        <h6 className="grey-text" >Select Position</h6>
                        <Select
                            value={this.state.selectedPositionOption}
                            options={positionOptions}
                            onChange={this.handlePosition}
                            required
                        />
                    </div>

                    {/* location dropdown */}
                    <div className="input-field">
                        <h6 className="grey-text" >Select Location</h6>
                        <Select
                            value={this.state.selectedLocationOption}
                            options={locationOptions}
                            onChange={this.handleLocation}
                            required
                        />
                    </div>
                    
                    <div className="row">
                        <div className="col s12 m6">
                            <h6 className="grey-text">Experience</h6>
                            {
                                experienceOptions.map((item, index) => (
                                    <div key={index}>
                                        <label>
                                            <input
                                                type="radio" 
                                                id="experience"
                                                value={item.value}
                                                checked={this.state.experience === item.value}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <span>{item.value}</span>
                                        </label>
                                    </div> 
                                ))
                            }
                        </div>

                        <div className="col s12 m6">
                            <h6 className="grey-text">Availability</h6>
                            {
                                availabilityOptions.map((item, index) => (
                                    <div key={index}>
                                        <label>
                                            <input
                                                type="radio" 
                                                id="availability"
                                                value={item.value}
                                                checked={this.state.availability === item.value}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <span>{item.value}</span>
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                                       
                    <div className="input-field">
                        <button type="submit" className="waves-effect waves-light btn blue">Add candidate</button>
                    </div>


                </form>          
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewCandidate: (id, name, position, location, experience, availability, photo) => (
            dispatch(addCandidate(id, name, position, location, experience, availability, photo))
        )
    }
}

export default connect(null, mapDispatchToProps)(AddCandidate);