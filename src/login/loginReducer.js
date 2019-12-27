const INITIAL_STATE = {login: '', password: '', list: []}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_CHANGED':
            return {...state, login: action.payload}
        case 'PASSWORD_CHANGED':
            return {...state, password: action.payload}
        case 'TODO_SEARCHED':
            return {...state, list: action.payload.data}
        case 'TODO_ADDED':
            return {...state, login: ''}
        default:
            return state
    }

}