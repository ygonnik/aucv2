import React from "react";

const lotItem = (lot) =>{
        return (
        <div class="col">
            <div class="card shadow-sm">
            <img class="card-img-top" src={lot.img} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
        );
    }

export default lotItem;
