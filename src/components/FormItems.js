import React from 'react'
import {setLocationFilter, setPositionFilter, setAvailabilityFilter, resetFilters, setExperienceFilter} from '../actions/Filteractions'
import {connect} from 'react-redux'

const availabilityOptions = [
    {value: 'all', label: 'all'},
    {value: 'immediately', label: 'immediately'},
    {value: '1 week', label: '1 week'},
    {value: '2 week', label: '2 week'},
    {value: '3 week', label: '3 week'},
    {value: '4 week', label: '4 week'},
    {value: '6 week', label: '6 week'}
];

const locationOptions = [
    {value: 'all', label: 'all', id:'location'},
    {value: 'Dubai', label: 'Dubai', id:'location'},
    {value: 'Abu Dhabi', label: 'Abu Dhabi', id:'location'},
    {value: 'Ras Al Khaimah', label: 'Ras Al Khaimah', id:'location'},
    {value: 'Sharjah', label: 'Sharjah', id:'location'}
];

const positionOptions = [
    {value: 'all', label: 'all', id:'position'},
    {value: 'Frontend Developer', label: 'Frontend Developer', id:'position'},
    {value: 'Backend Developer', label: 'Backend Developer',id:'position'},
    {value: 'Fullstack Developer', label: 'Fullstack Developer', id:'position'},
    {value: 'Teamlead Developer', label: 'Teamlead Developer', id:'position'},
    {value: 'QA Developer', label: 'QA Developer', id:'position'}
];

const experienceOptions = [
    {value: 'all', label: 'all'},
    {value: '1 year', label: '1 year'},
    {value: '2 year', label: '2 year'},
    {value: '3 year', label: '3 year'},
    {value: '4 year', label: '4 year'},
    {value: '5 year', label: '5 year'},
    {value: '6 year', label: '6 year'},
    {value: '7+ year', label: '7+ year'},
];

const FormItems = (props) => {
    // console.log(props)
    const {setPositionFilter, setAvailabilityFilter, setLocationFilter, setExperienceFilter} = props;

    const handleAvailability = (e) => {
        setAvailabilityFilter(e.target.value);
    }
    const handlePosition = (e) => {
        setPositionFilter(e.target.value);
    }
    const handleLocation = (e) => {
        setLocationFilter(e.target.value);
    }
    const handleExperience = (e) => {
        setExperienceFilter(e.target.value);
    }
    

    return (
        <div className="left-menu">
            <h4 className="title">Filter</h4>

            {/* <input 
                placeholder="Search Candidate.." 
                className="search-bar" 
                type="text"
                onChange={handleName}
             /> */}

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
                                            checked={props.filters.experience === item.value}
                                            onChange={handleExperience}
                                        />
                                        <span>{item.value}</span>
                                    </label>
                                </div> 
                            ))
                        }
                    </div>

                    <div className="col s12 m6">
                        <h6 className="grey-text">Position</h6>
                        {
                            positionOptions.map((item, index) => (
                                <div key={index}>
                                    <label>
                                        <input
                                            type="radio" 
                                            id="position"
                                            value={item.value}
                                            checked={props.filters.position === item.value}
                                            onChange={handlePosition}
                                        />
                                        <span>{item.value}</span>
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col s12 m6">
                        <h6 className="grey-text">Location</h6>
                        {
                            locationOptions.map((item, index) => (
                                <div key={index}>
                                    <label>
                                        <input
                                            type="radio" 
                                            id="location"
                                            value={item.value}
                                            checked={props.filters.location === item.value}
                                            onChange={handleLocation}
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
                                            checked={props.filters.availability === item.value}
                                            onChange={handleAvailability}
                                        />
                                        <span>{item.value}</span>
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div>
            <br />
            <button className="waves-effect waves-light btn blue" onClick={() => props.resetFilters()}>Clear Filters</button>
            

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPositionFilter: (position) => (
            dispatch(setPositionFilter(position))
        ),
        setLocationFilter: (location) => (
            dispatch(setLocationFilter(location))
        ),
        setExperienceFilter: (experience) => (
            dispatch(setExperienceFilter(experience))
        ),
        setAvailabilityFilter: (availability) => (
            dispatch(setAvailabilityFilter(availability))
        ),
        resetFilters: () => {
            dispatch(resetFilters())
        }
    }
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormItems);