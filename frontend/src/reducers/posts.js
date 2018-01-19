import {
    LOADED_POSTS
} from '../actions/posts'

const initialTestState = {
    data: []
}

export default ( state = initialTestState, action ) =>  {
    switch (action.type) {
        case LOADED_POSTS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}