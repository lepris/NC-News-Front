import React from 'react';
import { Router } from '@reach/router'

import SingleArticleView from '../SingleArticleView';
import AddArticle from '../AddArticle';
import Homeview from '../HomeView'
import LoginBox from '../LoginBox'
import { Erroneous } from '../Erroneous';

export const MainRouter = ({ username, topic, userLogin }) => (
    <Router className='App-main-route'  >
        <Erroneous path='/*' />
        <AddArticle username={username} path='/articles/add' />
        <Homeview path='/' />
        <Homeview path='/:filter' />
        <Homeview topic={topic} path='/topics/:topic/' />
        <Homeview topic={topic} path='/topics/:topic/:filter' />
        <LoginBox path='/login' username={username} userLogin={userLogin} />

        <SingleArticleView username={username} path='/articles/:article_id' />
    </Router>
)