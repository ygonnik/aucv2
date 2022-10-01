import React from "react";
import {useNavigate} from 'react-router-dom'
import {LOT_ROUTE} from '../utils/consts' 
import Timer from "./Timer";
import { observable } from 'mobx'

let timerState = observable({
    timerSeconds: null,
    timerMinutes: null,
    timerHours: null
});
const timerId = setInterval(function tick() {
    if (timerState.timerSeconds - 1 < 0) {
    if (timerState.timerMinutes - 1 < 0) {
        if (timerState.timerHours - 1 < 0) {
        clearInterval(timerId)
        }
        else {
        timerState.timerHours -= 1
        timerState.timerMinutes = 59
        timerState.timerSeconds = 59
        }
    }
    else {
        timerState.timerMinutes -= 1
        timerState.timerSeconds = 59
    }
    }
    else {
    timerState.timerSeconds -= 1
    }
}, 1000);
const LotItem = ({lot}) =>{
    const navigate = useNavigate()
    timerState.timerSeconds = (new Date(Date.parse(lot.end_at) - new Date())).getUTCSeconds()
    timerState.timerMinutes = (new Date(Date.parse(lot.end_at) - new Date())).getUTCMinutes()
    timerState.timerHours = (new Date(Date.parse(lot.end_at) - new Date())).getUTCHours()
        return (
        <div class="col" style={{cursor: 'pointer'}} onClick={() => navigate(LOT_ROUTE + '/' + lot.id)}>
            <div class="card shadow-sm">
            <img src={lot.img} class="card-img-top"  alt=''/>
                <div class="card-body">
                    <Timer timerState={timerState}/>
                    <h5 class="card-title">{lot.brand + ' ' + lot.model}</h5>
                    <p class="card-text">{lot.description}</p>
                </div>
            </div>
        </div>
        );
    }

export default LotItem;
