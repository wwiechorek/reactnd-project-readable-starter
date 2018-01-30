import { api, headers } from './_config'

export const getAll = () =>
    fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const getAllByCategory = category =>
    fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())

export const get = id =>
    fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())

export const vote = (id, inc) =>
    fetch(`${api}/posts/${id}`,
        {
            headers,
            method: 'POST',
            body: JSON.stringify({
                option: inc > 0 ? 'upVote' : 'downVote'
            })
        })

export const deletePost = id => 
    fetch(`${api}/posts/${id}`,
        {
            headers,
            method: 'DELETE',
        })

export const save = (id, { title, body }) =>
    fetch(`${api}/posts/${id}`,
    {
        headers,
        method: 'PUT',
        body: JSON.stringify({
            title,
            body,
        })
    })