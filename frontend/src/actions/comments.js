import * as comments from '../utils/comments'

export const LOADED_COMMENTS = 'LOADED_COMMENTS'
export const DELETED_COMMENT = 'DELETED_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const CREATED_COMMENT = 'CREATED_COMMENT'

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

export const voteComment = (id, inc) => dispatch =>
    comments.vote(id, inc)
    .then( res => dispatch({
        type: VOTE_COMMENT,
        payload: {
            id,
            inc
        }
    }))

export const createComment = data => dispatch =>
    comments.create(data)
    .then( res => dispatch({
        type: CREATED_COMMENT,
        payload: data
    }))

export const deleteComment = id => dispatch => 
    comments.deleteComment(id)
    .then( res => dispatch({
        type: DELETED_COMMENT,
        payload: id
    }))