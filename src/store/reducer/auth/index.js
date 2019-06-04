
const initialState = {
    user: {},
    loading: false
}

export const authUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return { ...state, user: action.data}
        case 'LOADING':
            return { ...state, loading: true }
        case 'LOADING_STOP':
            return { ...state, loading: false }
        default:
            return state
    }
}
