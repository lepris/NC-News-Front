import React, { Component } from 'react';
import { fetchAllCommentsByArticleId, commentDelete, commentPost } from '../db/api'
import ArticleComment from './ArticleComment';
import ArticlePostComment from './ArticlePostComment';

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

    handlePost = (input) => {
        console.log(input)
        commentPost(this.props.artId, input)
            .then(() => fetchAllCommentsByArticleId(this.props.artId))
            .then(newComments => this.setState({ comments: newComments }))
    }

    render() {
        return (<>
            <ArticlePostComment handlePost={this.handlePost} />
            {this.state.comments.length > 0 ?
                this.state.comments.map(com => {
                    return <ArticleComment key={com.comment_id} comment={com} handleDelete={this.handleDelete} />
                })
                :
                <h4>'Sorry No comments for this article'</h4>}

        </>)
    }

}

export default CommentsList