import React from 'react';
import TopicsPanel from '../../components/TopicsPanel';
import { Router } from '@reach/router';

export const LeftTopicsPanel = ({ device }) => (

    <>
        {console.log('place for device Left Topic Panel', device)}
        <Router className='App-side-route'  >
            <TopicsPanel path='/' device={device} />
            <TopicsPanel path='/:filter' device={device} />
            <TopicsPanel path='/articles/:articleId' device={device} />
            <TopicsPanel path='/topics/:topic/' device={device} />
            <TopicsPanel path='/topics/:topic/:filter' device={device} />
        </Router>
    </>
)


