import React, { Component } from "react";
import { voteUp, voteDown } from "../db/api";

import "./CommentVote.css";
class Voter extends Component {
  state = {
    comment: {},
    votesInc: 0,
    votedUp: false,
    votedDown: false
  };

  componentDidMount() {
    const { comment } = this.props;
    this.setState({ comment });
  }

  handleVoteUp = () => {
    voteUp("comments", this.state.comment.comment_id).then(votes =>
      this.setState({ votesInc: 1, votedUp: true, votedDown: false })
    );
  };
  handleVoteDown = () => {
    voteDown("comments", this.state.comment.comment_id).then(votes => {
      if (votes <= 0) {
        voteUp("comments", this.state.comment.comment_id);
        this.setState({ votesInc: 0, votedDown: true, votedUp: false });
      } else {
        this.setState({ votesInc: -1, votedDown: true, votedUp: false });
      }
    });
  };

  render() {
    return (
      <>
        <p>
          <button
            className="vote"
            disabled={this.state.votedUp === true}
            onClick={this.handleVoteUp}
          >
            vote
            <i className="fas fa-thumbs-up" />
          </button>
          <big className="votes_number">
            {this.state.comment.votes + this.state.votesInc}
          </big>
          <button
            className="vote"
            disabled={this.state.votedDown === true}
            onClick={this.handleVoteDown}
          >
            Vote <i className="fas fa-thumbs-down" />
          </button>
        </p>
      </>
    );
  }
}

export default Voter;
