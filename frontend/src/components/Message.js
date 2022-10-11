import React from "react";
import {useNavigate} from 'react-router-dom'
import {LOT_ROUTE} from '../utils/consts' 
import Timer from "./Timer";

const Message = ({message}) =>{
        return (
            <li class="clearfix">
                <div class="message-data text-end">
                    <span class="message-data-time">{message.send_at}</span>
                </div>
                <div class="message other-message float-right"> {message.content} </div>
            </li>
        );
    }

export default Message;
