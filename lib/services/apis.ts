import axios from "axios"

export const BASE_URL = 'https://livescore6.p.rapidapi.com'

export const axiosInstance = axios.create({});

export const apiConnector = ({ method, url, bodyData, headers, params }: any) => {
    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers : null,
        params: params ? params : null,
    });
};

export const News_API: any ={
    list: '/news/v2/list',
    bySport: '/news/v2/list-by-sport'
}
