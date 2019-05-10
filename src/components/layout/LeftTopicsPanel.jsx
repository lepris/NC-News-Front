import React from 'react';
import TopicsPanel from '../../components/TopicsPanel';
import { Router } from '@reach/router';

export const LeftTopicsPanel = ({ topic, device }) => (

    <>
        {console.log('place for device Left Topic Panel', device)}
        <Router className='App-side-route'  >
            <TopicsPanel path='/' device={device} />
            <TopicsPanel path='/articles/:articleId' device={device} topic={topic} />
            <TopicsPanel path='/topics/:topic' device={device} />
        </Router>
    </>
)


