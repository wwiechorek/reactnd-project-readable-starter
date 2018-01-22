import * as comments from '../utils/comments'

export const LOADED_COMMENTS = 'LOADED_COMMENTS'
export const DELETED_COMMENT = 'DELETED_COMMENT'
export const NEW_COMMENT = 'NEW_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export const receiveComments = data => ({
    type: LOADED_COMMENTS,
    payload: data
})

export const loadComments = postId => dispatch => {
    dispatch({
        type: LOADED_COMMENTS,
        payload: []
    })
    comments.getAll(postId)
    .then( res => res.filter( comment => !comment.deleted) )
    .then(res => dispatch(receiveComments(res)))
}