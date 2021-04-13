export function getToken() {
    console.log('🍕🍕');
    return localStorage.getItem('token')
}

export function setToken(token) {
    localStorage.setItem('token', token)
}

export function clearToken() {
    localStorage.removeItem('token')
}

export function isLoggedIn() {
    return getToken() ? true : false
}