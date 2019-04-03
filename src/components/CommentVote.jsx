import React, { Component } from 'react';
import { commentVoteUp, commentVoteDown } from '../db/api'

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
    handleVoteDown = () => {
        commentVoteDown(this.state.comment.comment_id)
            .then((votes) => this.setState((prevState) => this.state.votesInc = prevState.votesInc - 1))
    }


    render() {

        return (<>
            <p>voted: {this.state.comment.votes + this.state.votesInc} times&nbsp;
            <button hidden={this.state.votesInc === 1} onClick={this.handleVoteUp}>Vote +</button>
                <button hidden={this.state.votesInc === -1} onClick={this.handleVoteDown}>Vote -</button>
            </p>

        </>)
    }
}

export default CommentVote