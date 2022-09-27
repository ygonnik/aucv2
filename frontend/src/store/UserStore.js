import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {}
        this._messages = [
            {user1Id: 1, user2Id: 2, send_at: '2022-09-25 12:24:28.096+05', content: 'За 5 рублей отдашь?'},
            {user1Id: 2, user2Id: 1, send_at: '2022-09-25 12:24:28.096+05', content: 'нет'},
        ]
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    setMessages(messages) {
        this._messages = messages;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

    get messages() {
        return this._messages
    }
}