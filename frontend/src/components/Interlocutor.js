import React, {useContext} from "react";
import {Context} from '../index'

const Interlocutor = (props) =>{
    const {user} = useContext(Context);

    
    const openConnect = () => {
        const socket = new WebSocket('ws://localhost:3001/')
        socket.onopen = () => {
            socket.send(JSON.stringify({
            id1: user.user.id,
            id2: user.selectedInterlocutor,
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
                    messageHandler(msg)
                    break
                default:
                    break
            }
        }
    }

    const messageHandler = (msg) => {
        const content = msg.content
        let interlocutorId = null
        msg.id1 === this.user.id ? interlocutorId = msg.id2 : interlocutorId = msg.id1
        user.messages.get(interlocutorId).push(content)
    }

    const ChangeInterlocutor = () => {
        user.setSelectedInterlocutor({
            id: props.id,
            nickname: props.nickname})
        document.getElementById("interlocutorName").innerText = props.nickname
        openConnect() //todo sending message
    }

        return (
            <li class="clearfix" onClick={ChangeInterlocutor}>
                <div class="about">
                    <div class="name">{props.nickname}</div>
                </div>
            </li>
        );
    }

export default Interlocutor;
