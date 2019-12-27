export const login = (username, password) => {
    const credentials = btoa(username.concat(':' + password))
    console.log(credentials)
    fetch(`http://localhost:8080/auth/login`, {
        method: "POST",
        headers: {"Authorization": credentials}
    })
        .then(r => r.text())
        .then(data => console.log(data))
}


export const changeDescription = (event, type = 'LOGIN_CHANGED') => {
    if (event.target.type.toString().indexOf('password') !== -1) type = 'PASSWORD_CHANGED'
    return dispatch => {
        dispatch({type: type, payload: event.target.value})
    }
}