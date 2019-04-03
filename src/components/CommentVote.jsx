import React, { Component } from 'react';
import { commentVoteUp } from '../db/api'

class CommentVote extends Component {
    state = {
        comment: {}
    }

    componentDidMount() {
        const { comment } = this.props
        this.setState({ comment })
    }
    handleVoteUp = (e) => {
        e.preventDefault()
        commentVoteUp(this.state.comment.comment_id)
            .then((votes) => this.setState({ comment: { votes } }))
    }


    render() {

        return (<>
            <p>voted: {this.state.comment.votes} times</p>
            <button onClick={this.handleVoteUp}>Vote Up</button> <button onClick={this.handleVoteDown}>Vote Down</button>
        </>)
    }
}

export default CommentVote