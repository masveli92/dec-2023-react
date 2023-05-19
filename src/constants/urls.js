const jsonPlaceHolderApi = 'https://jsonplaceholder.typicode.com/'
const carsApi = 'https://owu.linkpc.net/carsAPI/v1/doc'

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