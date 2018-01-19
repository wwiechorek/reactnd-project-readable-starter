import { api, headers } from './_config'

export const getAll = () =>
    fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const getAllByCategory = ( category ) =>
    fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())