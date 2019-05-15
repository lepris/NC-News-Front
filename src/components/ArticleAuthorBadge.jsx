import React from 'react';
import blankImg from '../img/blank-profile-picture.png'

export default function ArticleAuthorBadge({ art }) {
    let errorflag = true;

    return (
        <div className='HomeViewArticleAuthorCard' >
            <div>
                <img className='HomeViewArticleAuthorAvatar' src={art.avatar_url || blankImg} alt='Article author'
                    onError={(e) => { if (errorflag) { errorflag = false; e.target.src = blankImg; e.target.alt = 'No author Photo provided' } }} />
            </div>
            <div>
                <span>AUTHOR</span><br></br>
                <span className='AuthorName SteelBlue'> {art.author}</span>

            </div>
        </div >
    )
}