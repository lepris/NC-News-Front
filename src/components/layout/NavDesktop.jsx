import React from 'react';
import { Link } from '@reach/router';
import logo from '../../img/logo.png';
import './NavDesktop.css'
import SortTopMenu from '../SortTopMenu';


export const NavDesktop = ({ username }) => (
    <div>
        <nav className="TopMenuContainer dropShadow" >


            <Link className='TopButton' to='/'><img className='TopMenuLogo' src={logo} alt='logo' /></Link>


            <SortTopMenu />
            <Link className='TopButton Patua' to='/articles/add'> <i className="fas fa-pencil-alt bigIcon"></i><span className='TopButtonDescription'>Add Article</span></Link>
            <Link className='TopButton Patua' to='/articles/add'> <i className="fas fa-user-alt bigIcon"></i><span className='TopButtonDescription'>User Profile</span></Link>
            {username && <>
                <h5>Logged in as {username}</h5>

            </>}
        </nav>
    </div>
);



