import {$authHost, $host} from "./index";

export const createLot = async (lot) => {
    const {data} = await $authHost.post('api/lot', lot)
    return data
}

export const changeApproveLot = async (id, approved) => {
    const {data} = await $authHost.patch('api/lot/' + id, {approved: approved})
    return data
}

export const fetchLots = async () => {
    const {data} = await $host.get('api/lot')
    return data
}

export const fetchOneLot = async (id) => {
    const {data} = await $host.get('api/lot/' + id)
    return data
}