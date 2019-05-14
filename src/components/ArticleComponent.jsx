import React from 'react';
import ArticleAuthor from './ArticleAuthor';

export const ArticleComponent = ({ art }) => {



    const createdWhen = new Date(art.created_at)

    const date = createdWhen.getDate()
    const month = createdWhen.getMonth()
    const year = createdWhen.getFullYear()


    return (<>
        {art.author && <ArticleAuthor username={art.author} />}


        <h2 className='Teal'>{art.title}</h2>
        <p>created at:<span> {`${date} / ${month} / ${year}`}</span></p>
        <div>{art.body}</div>

    </>)

}