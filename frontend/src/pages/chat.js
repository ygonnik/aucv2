import React, {useContext, useState, useEffect}  from 'react';
import { fetchMessages} from '../http/userAPI';
import {Context} from '../index'
import Interlocutor from '../components/Interlocutor';
import { observer } from 'mobx-react-lite';
import { observable } from "mobx"

const ChatPage = observer(() => {
    const {user} = useContext(Context);
    const focusInterlocutorId = useState(0)

    const openConnect = () => {
        const socket = new WebSocket('ws://localhost:3001/')
        socket.onopen = () => {
            socket.send(JSON.stringify({
            id1:user.user.id, // -interlocutorid
            id2: focusInterlocutorId,
            method:"connection"
            }))
        }
        socket.onmessage = (event) => {
            let msg = JSON.parse(event.data)
            switch (msg.method) {
                case "connection":
                    console.log(`пользователь ${msg.username} присоединился`)
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

    }

    useEffect(() => {
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    useEffect(() => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 
    return (
    <div class="container mt-3">
        <div class="row clearfix">
            <div class="col-lg-12">
                <div class="card chat-app">
                    <div id="plist" class="people-list">
                        <ul class="list-unstyled chat-list mt-2 mb-0">
                            {user.interlocutors.map( (interlocutor) =>
                            <Interlocutor key={interlocutor.id} nickname={interlocutor.nickname}/>)}
                            <li class="clearfix">
                                <div class="about">
                                    <div class="name">Vincent Porter</div>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="about">
                                    <div class="name">Aiden Chavez</div>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="about">
                                    <div class="name">Mike Thomas</div>
                                </div>
                            </li>                                    
                            <li class="clearfix">
                                <div class="about">
                                    <div class="name">Christian Kelly</div>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="about">
                                    <div class="name">Monica Ward</div>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="about">
                                    <div class="name">Dean Henry</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="chat">
                        <div class="chat-header clearfix">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="chat-about">
                                        <h6 class="m-b-0" id="interlocutorName">Aiden Chavez</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chat-history">
                            <ul class="m-b-0">
                                <li class="clearfix">
                                    <div class="message-data text-end">
                                        <span class="message-data-time">10:10 AM, Today</span>
                                    </div>
                                    <div class="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                </li>
                                <li class="clearfix">
                                    <div class="message-data">
                                        <span class="message-data-time">10:12 AM, Today</span>
                                    </div>
                                    <div class="message my-message">Are we meeting today?</div>                                    
                                </li>                               
                                <li class="clearfix">
                                    <div class="message-data">
                                        <span class="message-data-time">10:15 AM, Today</span>
                                    </div>
                                    <div class="message my-message">Project has been already finished and I have results to show you.</div>
                                </li>
                            </ul>
                        </div>
                        <div class="chat-message clearfix">
                            <div class="input-group mb-0">
                            <input type="text" class="form-control" placeholder="Напишите сообщение..." aria-label="Напишите сообщение..." aria-describedby="button-addon2"/>
                            <button class="btn btn-outline-primary" type="button" id="button-addon2">Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
});

export default ChatPage;
