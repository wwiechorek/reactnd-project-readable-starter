import * as categories from '../utils/categories'

export const LOADED_CATEGORIES = 'LOADED_CATEGORIES'

export const receiveCategories = categories => ({
    type: LOADED_CATEGORIES,
    payload: categories
})

export const loadCategories = () => dispatch => {
    categories.getAll()
    .then(res => dispatch(receiveCategories(res.categories)))
}