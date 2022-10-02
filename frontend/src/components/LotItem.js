import React from "react";
import {useNavigate} from 'react-router-dom'
import {LOT_ROUTE} from '../utils/consts' 
import Timer from "./Timer";

const LotItem = ({lot}) =>{
    const navigate = useNavigate()
        return (
        <div class="col" style={{cursor: 'pointer'}} onClick={() => navigate(LOT_ROUTE + '/' + lot.id)}>
            <div class="card shadow-sm">
            <img src={lot.img} class="card-img-top"  alt=''/>
                <div class="card-body">
                    <Timer end_at={lot.end_at}/>
                    <h5 class="card-title">{lot.brand + ' ' + lot.model}</h5>
                    <p class="card-text">{lot.description}</p>
                </div>
            </div>
        </div>
        );
    }

export default LotItem;
