import React from 'react';
import { Router, Link } from '@reach/router'

import SingleArticleView from '../SingleArticleView';
import AddArticle from '../AddArticle';
import Homeview from '../HomeView'
import { Erroneous } from '../Erroneous';

export const MainRouter = ({ username, topic }) => (
    <Router className='App-main-route'  >
        <AddArticle username={username} path='/articles/add' />
        <Homeview path='/' />
        <Erroneous path='/*' />
        <Homeview topic={topic} path='/topics/:topic' />

        <SingleArticleView username={username} path='/articles/:article_id' />
    </Router>
)