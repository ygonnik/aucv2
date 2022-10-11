import React from "react";
import {useNavigate} from 'react-router-dom'
import {LOT_ROUTE} from '../utils/consts' 
import Timer from "./Timer";

const Interlocutor = (props) =>{
        return (
            <li class="clearfix">
                <div class="about">
                    <div class="name">{props.nickname}</div>
                    <div class="status"> <i class="fa fa-circle offline"></i> offline since Oct 28 </div>
                </div>
            </li>
        );
    }

export default Interlocutor;
