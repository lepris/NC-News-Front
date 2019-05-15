import React from 'react';
import { NavDesktop } from './NavDesktop';
import { Router } from '@reach/router';
export const TopBar = ({ username, userLogin }) => (
    <Router className='App-top-route'>
        <NavDesktop path='/' username={username} userLogin={userLogin} />
        <NavDesktop path='/:filter/' username={username} userLogin={userLogin} />
        <NavDesktop path='/topics/:topic' username={username} userLogin={userLogin} />
        <NavDesktop path='/topics/:topic/:filter' username={username} userLogin={userLogin} />
        <NavDesktop path='/articles/:article_id' username={username} userLogin={userLogin} pageType={'SingleArticle'} />
        <NavDesktop path='/articles/add' username={username} userLogin={userLogin} pageType={'SingleArticle'} />
        <NavDesktop path='/login' username={username} userLogin={userLogin} pageType={'SingleArticle'} />

    </Router>
)








