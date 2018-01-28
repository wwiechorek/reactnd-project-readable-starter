import {
    LOADED_POSTS,
    VOTE_POST,
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
        case VOTE_POST: {
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