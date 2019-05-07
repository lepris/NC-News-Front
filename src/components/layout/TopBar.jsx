import React from 'react';

import { Link } from '@reach/router';

import LoginBox from '../LoginBox';


export const TopBar = ({ username, userLogin }) => (
    <nav>

        <Link to='/'><button>All Articles</button></Link>
        {!username && <LoginBox userLogin={userLogin} />}
        {username && <h5>Logged in as {username}
            <Link to='/articles/add'> <i className="fas fa-pencil-alt"></i>Add Article</Link></h5>}
    </nav>
)








