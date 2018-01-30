import * as posts from '../utils/posts'

export const LOADED_POSTS = 'LOADED_POSTS'
export const VOTE_POST = 'VOTE_POST'
export const SAVED_POST = 'SAVED_POST'

export const receivePosts = posts => ({
    type: LOADED_POSTS,
    payload: posts
})

export const receivePost = post => ({
    type: LOADED_POSTS,
    payload: [ post ]
})

export const loadPosts = () => dispatch => {
    dispatch({
        type: LOADED_POSTS,
        payload: []
    })
    posts.getAll()
    .then( res => res.filter( post => !post.deleted) )
    .then(res => dispatch(receivePosts(res)))
}

export const loadPostsCategory = category => dispatch =>
    posts.getAllByCategory(category)
    .then( res => res.filter( post => !post.deleted) )
    .then(res => dispatch(receivePosts(res)))

export const loadPost = id => dispatch => {

    posts.get(id)
    .then( res => res.deleted ? {} : res )    
    .then( res => dispatch(receivePost(res)))
}

export const votePost = (id, inc) => dispatch =>
    posts.vote(id, inc)
    .then( res => dispatch({
        type: VOTE_POST,
        payload: {
            id,
            inc
        }
    }))

export const savePost = (id, data) => dispatch =>
    posts.save(id, data)
    .then( res => dispatch({
        type: SAVED_POST,
        payload: {
            id,
            ...data
        }
    }))