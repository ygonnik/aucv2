import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, nickname, password) => {
    const {data} = await $host.post('api/user/registration', {email, nickname, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (emailNickname, password) => {
    const {data} = await $host.post('api/user/login', {emailNickname, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const fetchMessages = async (userId) => {
    const {data} = await $authHost.get('api/user/getchats/' + userId)
    return data
}

export const fetchUsersNicknames = async () => {
    const {data} = await $authHost.get('api/user/getnicknames')
    return data
}