const base = 'https://jsonplaceholder.typicode.com'

export const API = {
    getData:(route) =>{
        return fetch(`${base}/${route}`)
    }
}