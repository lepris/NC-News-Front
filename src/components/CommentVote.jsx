import React, { Component } from 'react';
import { commentVoteUp } from '../db/api'

class CommentVote extends Component {
    state = {
        comment: {},
        votesInc: 0
    }

    componentDidMount() {
        const { comment } = this.props
        this.setState({ comment })
    }


    handleVoteUp = () => {
        commentVoteUp(this.state.comment.comment_id)
            .then((votes) => this.setState((prevState) => this.state.votesInc = prevState.votesInc + 1))
    }


    render() {

        return (<>
            <p>voted: {this.state.comment.votes + this.state.votesInc} times</p>
            <button onClick={this.handleVoteUp}>Vote Up</button> <button onClick={this.handleVoteDown}>Vote Down</button>
        </>)
    }
}

export default CommentVote