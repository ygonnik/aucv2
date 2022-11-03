import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {}
        this._interlocutors = [];
        this._messages = new Map()
        this._sockets = new Map()
        this._selectedInterlocutor = null;
        makeAutoObservable(this)
    }

    openConnect (interlocutorId) {
        const socket = new WebSocket('ws://localhost:3001/')
        socket.onopen = () => {
            socket.send(JSON.stringify({
            user1Id: this.user.id,
            user2Id: interlocutorId,
            method:"connection"
            }))
        }
        socket.onmessage = (event) => {
            let msg = JSON.parse(event.data)
            switch (msg.method) {
                case "connection":
                    console.log(`пользователь присоединился`)
                    break
                case "newMessage":
                    let interlocutorId = null
                    msg.user1Id === this.user.id ? interlocutorId = msg.user2Id : interlocutorId = msg.user1Id
                    this.pushNewMessage(interlocutorId, msg)
                    break
                default:
                    break
            }
        }

        return socket
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
            let interlocutorId = null
            message[0].user1Id === this.user.id ? interlocutorId = message[0].user2Id : interlocutorId = message[0].user1Id
            if (!interlocutorsId.includes(interlocutorId)) {
                interlocutors.push({
                    id: interlocutorId,
                    nickname: data.find(user => user.id === interlocutorId).nickname})
                interlocutorsId.push(interlocutorId)
            }
        }
        this._interlocutors = interlocutors;
    }

    setMessages(messages) {
        let dialogs = new Map()
        let interlocutorId = null
        for (let message of messages) {
            interlocutorId = (message.user1Id === this.user.id) ? message.user2Id : message.user1Id
            if (dialogs.has(interlocutorId)) {
                dialogs.get(interlocutorId).push(message)
            }
            else {
                dialogs.set(interlocutorId, [message])
            }
        }
        this._messages = dialogs;
    }

    pushNewMessage(interlocutorId, msg) {
        this.messages.get(interlocutorId).push(msg)
    }

    setSockets(messages) {
        let sockets = new Map()
        for (let interlocutorId of messages.keys()) {
            sockets.set(interlocutorId, this.openConnect(interlocutorId))
        }
        this._sockets = sockets;
    }

    closeSockets() {
        for (let socket of this.sockets.values()) {
            socket.close()
        }
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

    get sockets() {
        return this._sockets
    }

    get selectedInterlocutor() {
        return this._selectedInterlocutor
    }

    
}