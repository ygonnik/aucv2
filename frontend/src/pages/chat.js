import React, {useContext, useState}  from 'react';
import {Context} from '../index'
import Interlocutor from '../components/Interlocutor';
import { observer } from 'mobx-react-lite';
import Message from '../components/Message';
import {createMessage} from '../http/userAPI'

const ChatPage = observer(() => {
    const {user} = useContext(Context);
    const [textboxContent, setTextboxContent] = useState('')

    let messageId = 0

    const SendMessage = () => {
        const message = {
            user1Id: user.user.id,
            user2Id: user.selectedInterlocutor.id,
            method:"newMessage",
            content: textboxContent,
            send_at: new Date()
            }
        user.sockets.get(user.selectedInterlocutor.id).send(JSON.stringify(message))
        createMessage(message)
    }

    return (
    <div class="container mt-3">
        <div class="row clearfix">
            <div class="col-lg-12">
                {user.interlocutors.length !== 0 ?
                <div class="card chat-app">
                    
                    <div id="plist" class="people-list">
                        <ul class="list-unstyled chat-list mt-2 mb-0">
                            {user.interlocutors.map( (interlocutor) =>
                            <Interlocutor key={interlocutor.id} id={interlocutor.id} nickname={interlocutor.nickname}/>)}
                        </ul>
                    </div>
                    <div class="chat">
                        <div class="chat-header clearfix">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="chat-about">
                                        <h6 class="m-b-0" id="interlocutorName">{user.selectedInterlocutor.nickname}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chat-history">
                            <ul class="m-b-0">
                                {console.log(user.messages)}
                                {user.messages.get(user.selectedInterlocutor.id).length > 0 ?
                                user.messages.get(user.selectedInterlocutor.id).map( (message) =>
                                <Message key={messageId++} message={message}/>)
                                : null}
                            </ul>
                        </div>
                        <div class="chat-message clearfix">
                            <div class="input-group mb-0">
                            <input type="text" class="form-control" placeholder="Напишите сообщение..." aria-label="Напишите сообщение..." aria-describedby="button-addon2" onChange={e => setTextboxContent(e.target.value)} value={textboxContent}/>
                            <button class="btn btn-outline-primary" type="button" id="button-addon2" onClick={SendMessage}>Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <p class="text-xl-center fs-1">У вас нет чатов.</p>
                }
            </div>
        </div>
    </div>
    );
});

export default ChatPage;
