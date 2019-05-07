import React from 'react';
import TopicsPanel from '../../components/TopicsPanel';
import { Router, Link } from '@reach/router';

export const LeftTopicsPanel = () => (
    <>
        <span>this new code</span>
        <Router className='App-side-route'  >
            <TopicsPanel path='/' />
            <TopicsPanel path='/topics/:topic' />
        </Router>
    </>
)


