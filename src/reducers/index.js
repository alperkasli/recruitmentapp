import rootReducer from './candidatesReducer'
import filterReducer from './filterReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    candidates: rootReducer,
    filters: filterReducer
});

export default allReducers;