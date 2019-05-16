import React, { Component } from "react";
import { voteUp, voteDown } from "../db/api";

import "./CommentVote.css";
class ArticleVoter extends Component {
  state = {
    article: {},
    votesInc: 0,
    votedUp: false,
    votedDown: false
  };

  componentDidMount() {
    const { article } = this.props;

    this.setState({ article });
  }

  handleVoteUp = () => {
    voteUp("articles", this.state.article.article_id).then(votes =>
      this.setState({ votesInc: 1, votedUp: true, votedDown: false })
    );
  };
  handleVoteDown = () => {

    if (this.state.article.votes <= 0) {
      this.setState({ votesInc: 0, votedDown: true, votedUp: false });
    }
    else {
      voteDown("articles", this.state.article.article_id)
      this.setState({ votesInc: -1, votedDown: true, votedUp: false });
    }

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
            {this.state.article.votes + this.state.votesInc > 0 ? this.state.article.votes + this.state.votesInc : 0}
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

export default ArticleVoter;
