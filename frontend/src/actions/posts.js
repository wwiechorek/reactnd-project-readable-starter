import * as posts from '../utils/posts'

export const LOADED_POSTS = 'LOADED_POSTS'

export const receivePosts = posts => ({
    type: LOADED_POSTS,
    payload: posts
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

export const loadPostsCategory = (category) => dispatch => {
    posts.getAllByCategory(category)
    .then( res => res.filter( post => !post.deleted) )
    .then(res => dispatch(receivePosts(res)))
}