import React from 'react';
import errorIllustration from '../db/img/error.jpg';
import './errors.css';


export const Erroneous = ({ message }) => {
    return (
        <div className='container'>
            <div className='image'>
                <img height='50vh' alt='Life of Brian' src={errorIllustration} />
            </div>
            <div className='text_part'>
                <h2>Big Fat Error</h2>

                <h4>{message}</h4>
                <p>Some things in life are bad,</p>
                <p>They can really make you mad,</p>
                <p>Other things just make you swear and curse,</p>
                <p>When you're chewing life's gristle,</p>
                <p>Don't grumble,</p>
                <p>Give a whistle</p>
                <p><small>-Monthy Python</small></p>

            </div>
        </div >
    )
}