import React, {Component} from 'react'
import {connect} from 'react-redux'
import FormItems from './FormItems';
import {deleteCandidate} from '../actions/Candidateactions'
import {setNameFilter} from '../actions/Filteractions'
import Modal from './Modal';
import AddCandidate from './AddCandidate';

class Home extends Component {

    handleName = (e) => {
        this.props.setNameFilter(e.target.value);
    }
    state = {
        modal: false
    }

    modalHandler = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
   
    render(){
        const { candidates, filters } = this.props;  //state passed through props
        
        const {name, position, location, experience, availability} = filters;

        const filteredList = (data, name, position, location, experience, availability) => {
            return data.filter(candidate => {
                const nameMatch = candidate.name.toLowerCase().includes(name.toLowerCase()) || name === '';
                const positionMatch = candidate.position === position || position === 'all';
                const locationMatch = candidate.location === location || location === 'all';
                const experienceMatch = candidate.experience === experience || experience === 'all';
                const availabilityMatch = candidate.availability === availability || availability === 'all';

                return nameMatch && positionMatch && locationMatch && availabilityMatch && experienceMatch;
            })
        }
        let afterFiltering = filteredList(candidates, name, position, location, experience, availability);


        const candidateList = afterFiltering.length ? (
            afterFiltering.map(candidate => (
                <div className="card horizontal" key={candidate.id} >
                    <div className="card-image valign-wrapper">
                        <img src={candidate.photo} alt="candidate" />
                    </div>
                    <div className="card-content">
                            <h4>{candidate.name}</h4>
                            <h6>Position: {candidate.position} ({candidate.experience}) </h6>
                            <h6>Location: {candidate.location}</h6>
                            <h6>Availability: {candidate.availability}</h6>
                    </div>
                        <span className="delete-button">
                            <button className="btn waves-effect waves-light red" onClick={() => this.props.deleteCandidate(candidate.id)}>delete</button>
                        </span>
                </div>
                ))
        ):  (
                <p>There is no candidate left.</p>
            );

        

        return (
            <div className="container section">

              {/* <Modal isModalShow={this.state.modal} modalHandler={this.modalHandler} >
                  <div className="white">
                    <AddCandidate />
                  </div>
              </Modal> */}

                <div className="row">
                    <div className="col s12 m7">
                        {/* <button className="waves-effect waves-light btn blue" onClick={this.modalHandler}>ADD</button> */}
                        <div className="input-field">
                            <label htmlFor="search">Search Candidate..</label>
                            <input 
                                id="search"
                                className="search-bar" 
                                type="text"
                                onChange={this.handleName}
                            />
                        </div>
                        {candidateList} 
                    </div>
                    <div className="col s12 m5">
                        <FormItems />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        candidates: state.candidates.candidates,
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNameFilter: (name) => (
            dispatch(setNameFilter(name))
        ),
        deleteCandidate: (id) => dispatch(deleteCandidate(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);