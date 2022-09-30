import React from 'react'
import LotList from '../components/LotList';
function adminPanel() {
    return (
    <div class="container">
        <LotList approved='0' />
    </div>
    );
};

export default adminPanel;
