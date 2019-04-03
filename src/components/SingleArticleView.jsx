import React, { Component } from 'react';
import { fetchArticleById } from '../db/api'
import { ArticleComponent } from './ArticleComponent';
import CommentsList from './CommentsList';



class SingleArticleView extends Component {
    state = {
        article: {},
    }

    componentDidMount() {
        this.getArticleById()
    }

    getArticleById = () => {
        fetchArticleById(this.props.article_id)
            .then(article => this.setState({ article }))
    }

    render() {

        return (<>
            <ArticleComponent art={this.state.article} />
            {this.state.article.article_id && <CommentsList username={this.props.username} artId={this.state.article.article_id} />}
        </>)
    }

}

export default SingleArticleView