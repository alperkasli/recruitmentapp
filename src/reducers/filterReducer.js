const initState = {
    name: '',
    position: 'all',
    location: 'all',
    experience: 'all',
    availability: 'all'
}

const filtersReducer = (state = initState, action) => {
    switch(action.type){
        case 'NAME':
            return {
                ...state,
                name: action.name
            };
        case 'POSITION':
            return {
                ...state,
                position: action.position
            };
        case 'LOCATION':
            return {
                ...state,
                location: action.location
            };
        case 'EXPERIENCE':
            return {
                ...state,
                experience: action.experience
            };
        case 'AVAILABILITY':
            return {
                ...state,
                availability: action.availability
            };
        case 'RESET':
            return {
                ...state,
                name: '',
                position: 'all',
                location: 'all',
                experience: 'all',
                availability: 'all'
            }
        default:
            return state;
    }
}

export default filtersReducer;