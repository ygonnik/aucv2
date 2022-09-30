import React from 'react';
import {Container} from 'react-bootstrap'
import LotList from '../components/LotList';

function home() {
    return (
    <Container>
        <LotList approved='1'/>
    </Container>
    );
};

export default home;
