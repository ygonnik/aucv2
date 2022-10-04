import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createLot = async (lot) => {
    const {data} = await $authHost.post('api/lot', lot)
    return data
}

export const fetchLots = async () => {
    const {data} = await $host.post('api/lot')
    return data
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}