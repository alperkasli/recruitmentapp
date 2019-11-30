export const deleteCandidate = (id) => {
    return {
        type: 'DELETE_CANDIDATE',
        id
    }
}

export const addCandidate = (id, name, position, location, experience, availability, photo) => {
    return {
        type: 'ADD_CANDIDATE',
        id,
        name,
        position,
        location,
        experience,
        availability,
        photo
    }
}
