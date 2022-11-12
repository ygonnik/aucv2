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

    pushNewLot(lot) {
        this.lots.push(lot)
    }

    setBids(bids) {
        this._bids = bids;
    }

    pushNewBid(bid) {
        this.bids.push(bid)
    }

    get lots() {
        return this._lots;
    }

    get bids() {
        return this._bids;
    }
}