import {makeAutoObservable} from 'mobx'

export default class LotStore {
    constructor() {
        this._lots = []
        this._bids = []
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