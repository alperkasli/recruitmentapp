import Myimg from '../media/mephoto.png'
import examplePhoto from '../media/person.png'

const initState = {
    candidates: [
        {id: '11', name: 'Mucahit Alper Kasli', position: 'Frontend Developer', location: 'Dubai', experience: '2 year', availability: '1 week', photo: Myimg},
        {id: '22', name: 'David Gate', position: 'Backend Developer', location: 'Sharjah',experience: '2 year', availability: '1 week', photo: examplePhoto}
    ]
}

const candidatesReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_CANDIDATE':
            return {
                candidates: [...state.candidates,
                {
                    id: action.id,
                    name: action.name,
                    position: action.position,
                    location: action.location,
                    experience: action.experience,
                    availability: action.availability,
                    photo: action.photo
                }]
            }
        case 'DELETE_CANDIDATE':
            let newCandidates = state.candidates.filter(candidate => {
                return candidate.id !== action.id
            });
            return {
                ...state,
                candidates: newCandidates
            }
        default:
            return state;
    }
}

export default candidatesReducer;