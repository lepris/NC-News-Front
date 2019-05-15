import React from 'react';
import { dateFinder } from '../utils/utils'
import ArticleAuthorBadge from './ArticleAuthorBadge';

export const ArticleComponent = ({ art }) => {



    const createdWhen = new Date(art.created_at)

    const date = createdWhen.getDate()
    const month = createdWhen.getMonth()
    const year = createdWhen.getFullYear()


    return (<>
        {art.author && < ArticleAuthorBadge art={art} />}

        {dateFinder(art.created_at)}
        <h2 className='Teal'>{art.title}</h2>
        <div>{art.body}</div>

    </>)

}