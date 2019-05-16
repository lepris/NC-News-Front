import React from 'react';
import { dateFinder } from '../utils/utils'
import ArticleAuthorBadge from './ArticleAuthorBadge';

export const ArticleComponent = ({ art }) => {


    return (<>
        {art.author && < ArticleAuthorBadge art={art} />}

        {dateFinder(art.created_at)}
        <h2 className='Teal'>{art.title}</h2>
        <div>{art.body}</div>

    </>)

}