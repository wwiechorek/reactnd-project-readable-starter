import { combineReducers } from 'redux'

import {
    TEST
} from '../actions'

const initialTestState = {
    action: 'no-action-yet'
}

function test( state = initialTestState, action ) {
    switch (action.type) {
        case TEST:
            return {
                ...state,
                action: action.payload
            }
        default:
            return state
    }
}

function other( state = initialTestState, action ) {
    switch (action.type) {
        case TEST:
            return {
                ...state,
                action: action.payload
            }
        default:
            return state
    }
}

export default combineReducers({
    test,
    other,
})