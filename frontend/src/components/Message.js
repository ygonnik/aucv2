import React, {useContext} from "react";
import {Context} from '../index'

const Message = ({message}) => {
    const {user} = useContext(Context);
    const isCurrentUserSender = (user.user.id === message.user1Id) || (user.user.id === message.id1)
        return (
            <div>
            { 
            isCurrentUserSender ?
            <li class="clearfix">
                <div class="message-data text-end">
                    <span class="message-data-time">{new Date(message.send_at).toLocaleString()}</span>
                </div>
                <div class="message other-message float-right"> {message.content} </div>
            </li>
            :
            <li class="clearfix">
                <div class="message-data">
                    <span class="message-data-time">{new Date(message.send_at).toLocaleString()}</span>
                </div>
                <div class="message my-message"> {message.content} </div>
            </li>
            }
            </div>
            
        );
    }

export default Message;
