import React, { Component } from 'react';
import { fetchAllCommentsByArticleId } from '../db/api'
import ArticleComment from './ArticleComment';

class CommentsList extends Component {
    state = {
        comments: [],
    }

    componentDidMount() {
        this.getCommentsByArtId()
    }

    getCommentsByArtId = () => {
        console.log(this.props)
        fetchAllCommentsByArticleId(this.props.artId)
            .then(comments => this.setState({ comments }))
    }


    render() {
        return this.state.comments.map((com, ind) => {
            return <ArticleComment key={com.comment_id} comment={com} />
        })
    }
}

export default CommentsList