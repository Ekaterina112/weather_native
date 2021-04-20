const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {
        'API-KEY': '97580e0f-7747-4533-9c03-60f1b0e4f8a8'
    }
})

//api
export const weatherAPI = {
    getWeather(){return instance.get('todo-lists')},
    getDetailWeather(){return instance.get('todo-lists')}
}