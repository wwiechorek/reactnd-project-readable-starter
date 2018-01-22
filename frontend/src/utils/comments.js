import { api, headers } from './_config'

export const getAll = (postId) =>
    fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
