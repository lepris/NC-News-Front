import React from 'react';
import { Link } from '@reach/router';
import logo from '../../img/logo.png';
import './NavDesktop.css'
import SortTopMenu from '../SortTopMenu';

const goBack = (e) => {
    e.preventDefault()
    window.history.back()
}

export const NavDesktop = ({ username, uri, pageType }) => (
    <div>
        <nav className="TopMenuContainer dropShadow" >


            <Link className='TopButton OutsideButton' to='/'><img className='TopMenuLogo' src={logo} alt='logo' /></Link>

            {pageType !== 'SingleArticle' ? (
                <SortTopMenu uri={uri} />
            )
                :
                (
                    <span className='TopButton Patua OutsideButton' onClick={goBack}><i className="fas fa-arrow-left bigIcon"></i>Back</span>
                )
            }




            {username !== '' ? (
                <>
                    <Link className='TopButton Patua OutsideButton' to='/articles/add'> <i className="fas fa-pencil-alt bigIcon"></i><span className='TopButtonDescription'>Add Article</span></Link>
                    <Link className='TopButton Patua OutsideButton' to='/'><i className="fas fa-user-alt bigIcon"></i><span className='TopButtonDescription'>Hello, {username}</span></Link>
                </>
            )
                :
                (
                    <>

                        <Link to='/login' className='TopButton Patua OutsideButton TopOffer' >
                            <span ><i className="fas fa-meteor bigIcon"></i><span>Login or Signup to start publishing Articles </span></span>
                        </Link>

                        <div className='TopButton Patua OutsideButton'>
                            <Link to='/login' className='LoginSingButton OutsideButton'><i className="fas fa-sign-in-alt "></i><span className='TopButtonDescription'>Log In</span></Link>
                            <Link to='/signup' className='LoginSingButton OutsideButton'><i className="fas fa-user-plus "></i><span className='TopButtonDescription'>Sign Up</span></Link>
                        </div>
                    </>
                )
            }
        </nav>
    </div >
);



