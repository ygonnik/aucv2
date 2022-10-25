import React, {useContext} from "react";
import {Context} from '../index'

const Interlocutor = (props) =>{
    const {user} = useContext(Context);

    const ChangeInterlocutorName = () => {
        user.selectedInterlocutor = props.key
        document.getElementById("interlocutorName").innerText = props.nickname
    }

        return (
            <li class="clearfix" onClick={ChangeInterlocutorName}>
                <div class="about">
                    <div class="name">{props.nickname}</div>
                </div>
            </li>
        );
    }

export default Interlocutor;
