import React from 'react';
import { Link } from '@reach/router';
import LoginBox from '../LoginBox';
import logo from '../../img/logo.png';

export const NavDesktop = ({ username, userLogin }) => (
    <div>
        <nav >

            <img src={logo} alt='logo' width='147px' height='94px' />
            <Link to='/'><button>All Articles</button></Link>
            {!username && <LoginBox userLogin={userLogin} />}
            {username && <>
                <h5>Logged in as {username}</h5>
                <Link to='/articles/add'> <i className="fas fa-pencil-alt"></i>Add Article</Link>
            </>}
        </nav>
    </div>
);



{/*  */ }