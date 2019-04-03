import React, { Component } from 'react';
import { fetchAllCommentsByArticleId, commentDelete } from '../db/api'
import ArticleComment from './ArticleComment';

class CommentsList extends Component {
    state = {
        comments: [],
        updateComments: 0,
    }
    componentDidMount() {
        this.getCommentsByArtId()
    }
    getCommentsByArtId = () => {
        fetchAllCommentsByArticleId(this.props.artId)
            .then(comments => this.setState({ comments }))
    }

    handleDelete = (props) => {
        commentDelete(props)
            .then(this.setState({ updateComments: 1 }))
            .then(() => fetchAllCommentsByArticleId(this.props.artId))
            .then(newComments => this.setState({ comments: newComments }))

    }

    render() {
        return (this.state.comments.length > 0 ?
            this.state.comments.map((com, ind) => {
                return <ArticleComment key={com.comment_id} comment={com} handleDelete={this.handleDelete} />
            })
            :
            <h4>'Sorry No comments for this article'</h4>

        )
    }

}

export default CommentsList