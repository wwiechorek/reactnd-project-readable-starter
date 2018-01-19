import {
    LOADED_CATEGORIES
} from '../actions/categories'

const initialTestState = {
    data: []
}

export default ( state = initialTestState, action ) =>  {
    switch (action.type) {
        case LOADED_CATEGORIES:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}