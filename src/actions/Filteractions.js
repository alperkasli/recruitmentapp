export const setNameFilter = (name) => {
    return {
        type: 'NAME',
        name
    }
}
export const setPositionFilter = (position) => {
    return {
        type: 'POSITION',
        position
    }
}
export const setLocationFilter = (location) => {
    return {
        type: 'LOCATION',
        location
    }
}
export const setExperienceFilter = (experience) => {
    return {
        type: 'EXPERIENCE',
        experience
    }
}
export const setAvailabilityFilter = (availability) => {
    return {
        type: 'AVAILABILITY',
        availability
    }
}
export const resetFilters = () => {
    return {
        type: 'RESET'
    }
}