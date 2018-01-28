import { api, headers } from './_config'

export const getAll = () =>
    fetch(`${api}/categories`, { headers })
    .then(res => res.json())