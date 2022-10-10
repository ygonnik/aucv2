import React, {useContext} from 'react'
import LotList from '../components/LotList';
import {Context} from "../index";

function Mylots() {
    const {user} = useContext(Context)
    return (
    <div class="container">
        <LotList userId = {user.user.id} />
    </div>
    );
};

export default Mylots;
