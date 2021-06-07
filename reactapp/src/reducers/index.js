

const INITIAL_STATE = {
    isLoading: false,
    countries: [],
    message: ""
}




export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'GET_COUNTRIES_START':
            return { ...state, isLoading: true, message: '' }

        case 'GET_COUNTRIES_SUCCESS':
            return { ...state, isLoading: false, countries: action.payload }

        case 'GET_COUNTRIES_ERROR':
            return { ...state, isLoading: false, message: action.payload }

        default: return state

    }
}