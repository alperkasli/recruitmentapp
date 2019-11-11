import React, { Component } from 'react'
import { addCandidate } from '../actions/Candidateactions'
import {connect} from 'react-redux'


class AddCandidate extends Component {

    state = {
        name: '',
        position: 'Engineer',
        location: 'Dubai',
        availability: '',
        photo: ''
    }

    handleChange = (e) => {
        this.setState({
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

    handlePosition = (e) => {
        this.setState({
            position: e.target.value
        })
    }

    handleLocation = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {name, position, location, availability, photo} = this.state;
        if(name === '' || availability==='' || photo === ''){
            alert('please fill all inputs..')
            return;
        }
        this.props.addNewCandidate(
            Math.random(),
            name,
            position,
            location,
            availability,
            photo
        );
        this.setState({
            name: '',
            position: '',
            location: '',
            availability: '',
            photo: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="container">
                    <br />
                    {this.state.photo && <img className="card-image" src={this.state.photo} alt="candidate" />}
                    <label htmlFor="photo">Select image to upload  </label>
                    <input
                        id="upload-btn"
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={this.handleLoadLocalFile}
                    />
                    <br />
                    <br />
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" onChange={this.handleChange} value={this.state.name} placeholder="Name" />

                    <label htmlFor="position">position</label>
                    <select 
                        className="browser-default"
                        onChange={this.handlePosition}
                        >
                            <option value="Engineer">Engineer</option>
                            <option value="Designer">Designer</option>
                            <option value="Developer">Developer</option>
                    </select>

                    <label htmlFor="location">location</label>
                    <select 
                        className="browser-default"
                        onChange={this.handleLocation}
                        >
                            <option value="Dubai">Dubai</option>
                            <option value="Sharjah">Sharjah</option>
                            <option value="Abu Dhabi">Abu Dhabi</option>
                    </select>

                    <label htmlFor="availability">availability</label>
                    <div>
                        <label>
                            <input
                                type="radio" 
                                id="availability"
                                value="immediately"
                                checked={this.state.availability === 'immediately'}
                                onChange={this.handleChange}
                            />
                            <span>immediately</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio" 
                                id="availability"
                                value="1 week"
                                checked={this.state.availability === '1 week'}
                                onChange={this.handleChange}
                            />
                            <span>1 week</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio" 
                                id="availability"
                                value="2 week"
                                checked={this.state.availability === '2 week'}
                                onChange={this.handleChange}
                            />
                            <span>2 week</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio" 
                                id="availability"
                                value="1 month"
                                checked={this.state.availability === '1 month'}
                                onChange={this.handleChange}
                            />
                            <span>1 month</span>
                        </label>
                    </div>
                    <br />
                    <button className="waves-effect waves-light btn blue">Add candidate</button>


                </form>          
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewCandidate: (id, name, position, location, availability, photo) => (
            dispatch(addCandidate(id, name, position, location, availability, photo))
        )
    }
}

export default connect(null, mapDispatchToProps)(AddCandidate);