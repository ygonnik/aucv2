import React, {useContext} from 'react';
import {Context} from '../index'
import {observer} from "mobx-react-lite";
import LotItem from './LotItem'

const LotList = observer((props) => {
    const {lot} = useContext(Context);
    const displayedLots = lot.lots.filter( lot => lot.approved === props.approved);
    console.log(Boolean(props.approved))
    return (
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {displayedLots.map( lot =>
                        <LotItem key={lot.id} lot={lot}/>)}
                </div>
            </div>
        </div>
    );
});

export default LotList;
