import { api, headers } from './_config'

export const getAll = (postId) =>
    fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())

export const vote = (id, inc) =>
    fetch(`${api}/comments/${id}`,
        {
            headers,
            method: 'POST',
            body: JSON.stringify({
                option: inc > 0 ? 'upVote' : 'downVote'
            })
        })

export const create = ({ id, parentId, timestamp, body, author }) =>
    fetch(`${api}/comments/`,
            {
                headers,
                method: 'POST',
                body: JSON.stringify({
                    id,
                    parentId,
                    timestamp,
                    body,
                    author
                })
            })

export const deleteComment = id => 
    fetch(`${api}/comments/${id}`,
        {
            headers,
            method: 'DELETE',
        })

export const save = (id, { timestamp, body }) =>
    fetch(`${api}/comments/${id}`,
        {
            headers,
            method: 'PUT',
            body: JSON.stringify({
                timestamp,
                body,
            })
        })