import React from "react";

const Interlocutor = (props) =>{
    const ChangeInterlocutorName = () => {
        document.getElementById("Sitename").innerText = props.nickname
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
