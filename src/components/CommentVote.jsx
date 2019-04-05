import React, { Component } from 'react';
import { commentVoteUp, commentVoteDown } from '../db/api';
import './CommentVote.css';
class CommentVote extends Component {
    state = {
        comment: {},
        votesInc: 0,
        votedUp: false,
        votedDown: false,
    }

    componentDidMount() {
        const { comment } = this.props
        this.setState({ comment })
    }

    handleVoteUp = () => {
        commentVoteUp(this.state.comment.comment_id)
            .then((votes) => this.setState({ votesInc: 1, votedUp: true, votedDown: false }))
    }
    handleVoteDown = () => {
        commentVoteDown(this.state.comment.comment_id)
            .then((votes) => this.setState({ votesInc: -1, votedDown: true, votedUp: false }))
    }

    render() {

        return (<>
            <p>
                <button className='vote' hidden={this.state.votedUp === true} onClick={this.handleVoteUp}>vote<i class="fas fa-thumbs-up"></i></button>
                <big className='votes_number'>{this.state.comment.votes + this.state.votesInc}</big>
                <button className='vote' hidden={this.state.votedDown === true} onClick={this.handleVoteDown}>Vote <i class="fas fa-thumbs-down"></i></button>
            </p>

        </>)
    }
}

export default CommentVote