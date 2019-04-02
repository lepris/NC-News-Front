import React, { Component } from 'react';
import { Link } from '@reach/router';
// import { fetchArticleById } from '../db/api'

class HomeViewArticle extends Component {

    state = {
        article: {}
    }

    render() {
        const art = this.props.article;
        return (<>
            <h4>{art.title}</h4>
            <h6>{art.author}</h6>
            <span className='topic'>{art.topic}</span>
            <h6>votes: {art.votes} | comments: {art.comments}</h6>

            <button><Link to={`/articles/` + art.article_id}> read more</Link></button>
        </>)


    }
}

export default HomeViewArticle