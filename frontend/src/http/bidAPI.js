import {$authHost, $host} from "./index";

export const createBid = async (userId, lotId, price) => {
    const {data} = await $authHost.post('api/bid', {userId, lotId, price})
    return data
}

export const fetchBidsByLotId = async (lotId) => {
    const {data} = await $host.get('api/bid/getbylot/' + {lotId})
    return data
}

export const fetchBidsByUserId = async (userId) => {
    const {data} = await $host.get('api/bid/getbyuser' + {userId})
    return data
}