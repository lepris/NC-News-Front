import React, { Component } from 'react';
import { fetchArticleById } from '../db/api'
import ArticleAuthor from './ArticleAuthor';



class SingleArticleView extends Component {
    state = {
        article: {},
        comments: {}
    }

    componentDidMount() {
        this.getArticleById()
    }

    getArticleById = () => {
        fetchArticleById(this.props.article_id)
            .then(article => this.setState({ article }))
    }

    render() {
        const art = this.state.article;
        const createdWhen = new Date(art.created_at)

        const date = createdWhen.getDate()
        const month = createdWhen.getMonth()
        const year = createdWhen.getFullYear()


        return (<>
            {this.state.article.author && <ArticleAuthor username={art.author} />}
            <span>created at: {`${date} / ${month} / ${year}`}</span>

            <h1>{art.title}</h1>
            <div>{art.body}</div>

        </>)
    }

}

export default SingleArticleView