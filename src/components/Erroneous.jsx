import React from 'react';
import './errors.css';


export const Erroneous = ({ message }) => {
    return (
        <div className='ThreeColumnContainer'>
            < div className='SingleArticleCard' >

                <div className='text_part'>
                    <h3 className='MidnightBlue'>Something went wrong</h3>
                    <h4 className='Teal'>{message.status}</h4>

                    <p>Some things in life are bad,</p>
                    <p>They can really make you mad,</p>
                    <p>Other things just make you swear and curse,</p>
                    <p>When you're chewing life's gristle,</p>
                    <p>Don't grumble,</p>
                    <p>Give a whistle</p>
                    <p><small>-Monthy Python</small></p>

                </div>
            </div >
        </div >
    )
}