import React, {Component} from 'react'
import {connect} from 'react-redux'
import FormItems from './FormItems';
import {deleteCandidate} from '../actions/Candidateactions'

class Home extends Component {

   
    render(){
        const { candidates, filters } = this.props;  //state passed through props
        
        const {name, position, location, availability} = filters;

        const filteredList = (data, name, position, location, availability) => {
            return data.filter(candidate => {
                const nameMatch = candidate.name.toLowerCase().includes(name.toLowerCase()) || name === '';
                const positionMatch = candidate.position === position || position === 'all';
                const locationMatch = candidate.location === location || location === 'all';
                const availabilityMatch = candidate.availability === availability || availability === 'all';

                return nameMatch && positionMatch && locationMatch && availabilityMatch;
            })
        }
        let afterFiltering = filteredList(candidates, name, position, location, availability);


        const candidateList = afterFiltering.length ? (
            afterFiltering.map(candidate => (
                <div className="card horizontal" key={candidate.id} >
                    <div className="card-image valign-wrapper">
                        <img src={candidate.photo} alt="candidate" />
                    </div>
                    <div className="card-content">
                            <h4>Name: {candidate.name}</h4>
                            <h6>Position: {candidate.position}</h6>
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
            <div className="container">
                <div className="content-wrapper">
                    <div className="filters-container">
                        <FormItems />
                    </div>
                    <div className="candidates-container">
                        <h4 className="center">Candidates</h4>
                        {candidateList}     
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
        deleteCandidate: (id) => dispatch(deleteCandidate(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);