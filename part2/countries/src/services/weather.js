import axios from "axios";

const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
const baseUrl ='https://api.openweathermap.org/data/2.5/weather?'
const iconUrl = 'https://openweathermap.org/img/wn'

const show = (weather) => {
    const request = axios.get(
        `${baseUrl}q=${weather}&appid=${apiKey}&units=metric`
    )

    return request.then(res => res.data);
}

const getWeatherIcon = (iconCode) => {
    return `${iconUrl}/${iconCode}@2x.png`
}

export default {
    show,
    getWeatherIcon
}