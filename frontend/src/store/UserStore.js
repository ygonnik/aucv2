import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {}
        this._interlocutors = [];
        this._messages = new Map()
        this._selectedInterlocutor = null;
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    setInterlocutors(data) {
        let interlocutors = []
        let interlocutorsId = []
        let message = null
        const iter = this._messages.values();

        for (let i = 0; i < this.messages.size; i++) {
            message = iter.next().value
            if (!interlocutorsId.includes(message[0].user2Id)) {
                interlocutors.push({
                    id: message[0].user2Id,
                    nickname: data.find(user => user.id === message[0].user2Id).nickname}) // TODO
                interlocutorsId.push(message[0].user2Id)
            }
        }
        this.setSelectedInterlocutor(interlocutors[0])
        this._interlocutors = interlocutors;
    }

    setMessages(messages) {
        let dialogs = new Map()

        for (let message of messages) {
            if (dialogs.has(message.user2Id)) {
                dialogs.get(message.user2Id).push(message)
            }
            else {
                dialogs.set(message.user2Id, [message])
            }
        }
        this._messages = dialogs;
    }

    setSelectedInterlocutor(selectedInterlocutor) {
        this._selectedInterlocutor = selectedInterlocutor;
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

    get selectedInterlocutor() {
        return this._selectedInterlocutor
    }
}