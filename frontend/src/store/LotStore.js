import {makeAutoObservable} from 'mobx'

export default class LotStore {
    constructor() {
        this._lots = []
        this._bids = [
            {id: 1, userId: 1, lotId: 1, price: 40000}
        ]
        makeAutoObservable(this)
    }

    setLots(lots) {
        this._lots = lots;
    }

    setBids(bids) {
        this._bids = bids;
    }

    get lots() {
        return this._lots;
    }

    get bids() {
        return this._bids;
    }
}