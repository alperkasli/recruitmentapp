import React from 'react'
import {setNameFilter, setLocationFilter, setPositionFilter, setAvailabilityFilter, resetFilters} from '../actions/Filteractions'
import {connect} from 'react-redux'

const FormItems = (props) => {
    // console.log(props)
    const {setPositionFilter, setAvailabilityFilter, setNameFilter, setLocationFilter} = props;

    const handleName = (e) => {
        setNameFilter(e.target.value);
    }
    const handleAvailability = (e) => {
        setAvailabilityFilter(e.target.value)
    }
    const handlePosition = (e) => {
        setPositionFilter(e.target.value);
    }
    const handleLocation = (e) => {
        setLocationFilter(e.target.value);
    }

    return (
        <div className="left-menu">
            <h4 className="title">Filter</h4>

            <input 
                placeholder="Search Candidate.." 
                className="search-bar" 
                type="text"
                onChange={handleName}
             />

            <label>
                position
                <select 
                    className="browser-default"
                    onChange={handlePosition}
                    value={props.filters.position}
                    >
                        <option value="all">All</option>
                        <option value="Engineer">Engineer</option>
                        <option value="Designer">Designer</option>
                        <option value="Developer">Developer</option>
                </select>
            </label>
            <label>
                location
                <select 
                    className="browser-default"
                    onChange={handleLocation}
                    value={props.filters.location}
                    >
                        <option value="all">All</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                </select>
            </label>
            <label>availability</label>
            <div>
                <label>
                    <input
                        type="radio" 
                        id="availability"
                        value="all"
                        checked={props.filters.availability === 'all'}
                        onChange={handleAvailability}
                    />
                    <span>all</span>
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio" 
                        id="availability"
                        value="immediately"
                        checked={props.filters.availability === 'immediately'}
                        onChange={handleAvailability}
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
                        checked={props.filters.availability === '1 week'}
                        onChange={handleAvailability}
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
                        checked={props.filters.availability === '2 week'}
                        onChange={handleAvailability}
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
                        checked={props.filters.availability === '1 month'}
                        onChange={handleAvailability}
                    />
                    <span>1 month</span>
                </label>
            </div>
            <br />
            <button className="waves-effect waves-light btn blue" onClick={() => props.resetFilters()}>Clear Filters</button>
            

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNameFilter: (name) => (
            dispatch(setNameFilter(name))
        ),
        setPositionFilter: (position) => (
            dispatch(setPositionFilter(position))
        ),
        setLocationFilter: (location) => (
            dispatch(setLocationFilter(location))
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