import axios from "axios";
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api';

const index = () => {
    const request = axios.get(`${baseUrl}/all`);
    return request.then(res => res.data);
}

const filter = (name) => {
    const request = axios.get(`${baseUrl}/name/${name}`);
    return request.then(res => {
        console.log(res.data);
    });
}

export default {
    index,
    filter
}
