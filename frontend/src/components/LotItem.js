import React from "react";

const lotItem = ({lot}) =>{
        return (
        <div class="col">
            <div class="card shadow-sm">
            <img src={lot.img} class="card-img-top"  alt=''/>
                <div class="card-body">
                    <h5 class="card-title">{lot.brand + ' ' + lot.model}</h5>
                    <p class="card-text">{lot.description}</p>
                </div>
            </div>
        </div>
        );
    }

export default lotItem;
