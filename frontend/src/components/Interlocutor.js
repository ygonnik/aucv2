import React, {useContext} from "react";
import {Context} from '../index'

const Interlocutor = (props) =>{
    const {user} = useContext(Context);

    const ChangeInterlocutor = () => {
        user.setSelectedInterlocutor({
            id: props.id,
            nickname: props.nickname})
        document.getElementById("interlocutorName").innerText = props.nickname
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
