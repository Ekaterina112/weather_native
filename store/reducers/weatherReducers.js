import {GET_WEATHER, SET_ERROR} from "../types";


const initialState = {
    data: null,
    error: ''
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return {
                data: action.payload,
                error: ''
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

//actionCreators
export const GetWeatherAC = (payload) => ({type: GET_WEATHER, payload})
export const SetErrorAC = (payload) => ({type: SET_ERROR, payload})
//thunks
export const getWeather = async () => {
    try {
        let response = await getWeather()
        if (response.status === 200) {
            dispatch(GetWeatherAC(response.data))
        } else {
            //error message
            dispatch(SetErrorAC(response.data))
        }
    } catch (e) {

    }
}