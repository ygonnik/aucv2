import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {}
        this._interlocutors = [];
        this._messages = []
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    setInterlocutors(interlocutors) {
        this._interlocutors = interlocutors;
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

    get interlocutors() {
        return this._interlocutors;
    }

    get messages() {
        return this._messages
    }
}