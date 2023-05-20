const jsonPlaceHolderApi = 'https://jsonplaceholder.typicode.com/'
const carsApi = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'
const urls ={
    users: '/users',
    comments: '/comments',
    cars:{
        cars,
        byId:(id) => `${cars}/${id}`
    }
}
export {
    jsonPlaceHolderApi,
    carsApi,
    urls
}