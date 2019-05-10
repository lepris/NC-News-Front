import React from 'react';
import TopicsPanel from '../../components/TopicsPanel';
import { Router, Link } from '@reach/router';

export const LeftTopicsPanel = ({ topic }) => (
    <>

        <Router className='App-side-route'  >
            <TopicsPanel path='/' />
            <TopicsPanel path='/articles/:articleId' topic={topic} />
            <TopicsPanel path='/topics/:topic' />
        </Router>
    </>
)

