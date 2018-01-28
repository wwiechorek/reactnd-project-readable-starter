import {
    LOADED_COMMENTS,
    VOTE_COMMENT,
    CREATED_COMMENT,
    DELETED_COMMENT,
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
        case CREATED_COMMENT: {
            let newData = state.data
            action.payload.voteScore = 1
            action.payload.parentDeleted = false
            newData.push(action.payload)
            return {
                ...state,
                data: [
                    ...newData
                ]
            }
        }
        case DELETED_COMMENT: {
            //to-do
            return {
                ...state
            }
        }
        case VOTE_COMMENT: {
            return {
                ...state,
                data: state.data.map(item => item.id !== action.payload.id ? item : {
                    ...item,
                    voteScore: item.voteScore + action.payload.inc
                })
            }
        }
        default:
            return state
    }
}