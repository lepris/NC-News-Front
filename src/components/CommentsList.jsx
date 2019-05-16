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
        const { commentCount } = this.props;
        commentCount > 0 ? this.getCommentsByArtId() : this.setState({ noComments: true })
    }
    getCommentsByArtId = () => {
        fetchAllCommentsByArticleId(this.props.artId)
            .then(comments => this.setState({ comments }))
            .catch(err => this.setState({ commentsCount: 0 }))
    }

    handleDelete = (props) => {
        commentDelete(props)
            .then(this.setState({ updateComments: 1 }))
            .then(() => fetchAllCommentsByArticleId(this.props.artId))
            .then(newComments => this.setState({ comments: newComments }))
    }

    handlePost = (input) => {
        commentPost(this.props.artId, input)
            .then(() => fetchAllCommentsByArticleId(this.props.artId))
            .then(newComments => this.setState({ comments: newComments }))
    }

    render() {
        return (<>
            {this.props.username.length > 2 ?
                <ArticlePostComment username={this.props.username} handlePost={this.handlePost} />
                :
                <p className='info_message'><i className="fas fa-info-circle"></i>Please Log in to add comments</p>
            }
            {this.state.comments.length > 0 ?
                this.state.comments.map(com => {
                    return <ArticleComment key={com.comment_id} username={this.props.username} comment={com} handleDelete={this.handleDelete} />
                })
                :
                <h4>'Sorry No comments for this article'</h4>}

        </>)
    }

}

export default CommentsList