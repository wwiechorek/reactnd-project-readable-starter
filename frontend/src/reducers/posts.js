import {
    LOADED_POSTS,
    VOTE_POST,
    SAVED_POST,
    DELETED_POST
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
        case SAVED_POST: {
            let item = state.data.find( item => item.id === action.payload.id )
            let index = state.data.indexOf( item )
            let data = state.data
            data[index] = {
                ...item,
                body: action.payload.body,
                title: action.payload.title
            }
            return {
                ...state,
                data: [
                    ...data
                ]
            }
        }

        case DELETED_POST: {
            let data = state.data

            let item = data.find( item => item.id === action.payload )
            item = data.indexOf(item)
            
            data.splice( item, 1 )


            return {
                ...state,
                data: [
                    ...data
                ]
            }
        }

        default:
            return state
    }
}