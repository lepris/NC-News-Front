import React from 'react';
import { Link } from '@reach/router';
import logo from '../../img/logo.png';
import './NavDesktop.css'
import SortTopMenu from '../SortTopMenu';


export const NavDesktop = ({ username, uri }) => (
    <div>
        <nav className="TopMenuContainer dropShadow" >


            <Link className='TopButton OutsideButton' to='/'><img className='TopMenuLogo' src={logo} alt='logo' /></Link>
            <SortTopMenu uri={uri} />
            <Link className='TopButton Patua OutsideButton' to='/articles/add'> <i className="fas fa-pencil-alt bigIcon"></i><span className='TopButtonDescription'>Add Article</span></Link>

            {username !== '' ? (

                <Link className='TopButton Patua OutsideButton' to='/articles/add'><i className="fas fa-user-alt bigIcon"></i><span className='TopButtonDescription'>Hello, {username}</span></Link>
            )
                :
                (
                    <div className='TopButton Patua OutsideButton'>
                        <Link to='/login' className='LoginSingButton OutsideButton'><i className="fas fa-sign-in-alt "></i><span className='TopButtonDescription'>Log In</span></Link>
                        <Link to='/signup' className='LoginSingButton OutsideButton'><i className="fas fa-user-plus "></i><span className='TopButtonDescription'>Sign Up</span></Link>
                    </div>
                )
            }
        </nav>
    </div>
);



