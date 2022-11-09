import React, { useContext, useEffect } from 'react';
import { Context } from '../index';
import LotList from '../components/LotList';
import {fetchLots} from '../http/lotAPI'

function Home() {
    const {lot} = useContext(Context)

    useEffect(() => {
        fetchLots().then(data => lot.setLots(data.rows))
    },[])
    return (
    <div class="container">
        <LotList approved='1'/>
    </div>
    );
};

export default Home;
