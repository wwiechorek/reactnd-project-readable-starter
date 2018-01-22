import {
    LOADED_COMMENTS,
    DELETED_COMMENT,
    NEW_COMMENT,
    UPDATE_COMMENT
} from '../actions/comments'

const initialTestState = {
    data: []
}

export default ( state = initialTestState, action ) =>  {
    switch (action.type) {
        case LOADED_COMMENTS: {
            return {
                ...state,
                data: action.payload
            }
        }
        case DELETED_COMMENT: {
            return {
                ...state,
            }
        }
        case NEW_COMMENT: {
            return {
                ...state,
            }
        }
        case UPDATE_COMMENT: {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}