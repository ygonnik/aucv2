import {makeAutoObservable} from 'mobx'

export default class LotStore {
    constructor() {
        this._lots = [
            {id: 1,
            end_at: '2022-09-29 12:24:28.096+05',
            body_style: 'Хэтчбек',
            brand: 'Audi',
            model: 'A3',
            engine_volume: 2100,
            power: 120,
            mileage: 65444,
            fuel: 'Бензин',
            drivetrain: 'Передний',
            transmission: 'Механическая',
            color: 'Красный',
            steering_wheel: 'Правый',
            description: 'Не бита, не крашена.',
            start_price: 30000,
            redemption_price: 200000,
            city: 'Тюмень',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2020_Audi_A3_S_Line_Edition_1_35_TD_2.0.jpg/305px-2020_Audi_A3_S_Line_Edition_1_35_TD_2.0.jpg',
            userId: 1}
        ]
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