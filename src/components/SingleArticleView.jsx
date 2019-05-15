import React, { Component } from "react";
import { fetchArticleById } from "../db/api";
import { ArticleComponent } from "./ArticleComponent";
import CommentsList from "./CommentsList";
import { Erroneous } from "./Erroneous";
import ArticleVoter from "./ArticleVote";

class SingleArticleView extends Component {
  state = {
    article: {},
    loading: true
  };

  componentDidMount() {
    this.getArticleById();
  }

  getArticleById = () => {
    fetchArticleById(this.props.article_id).then(article =>
      this.setState({ article, loading: false })
    );
  };

  render() {
    window.scrollTo(0, 0);

    if (this.state.loading) return <p>Loading...</p>;
    if (this.state.err) return <Erroneous message={this.state.err.message} />;
    return (
      <div className='SinglePage'>
        <div className='SingleArticleContainer'>
          <div className='SingleArticleCard'>
            <ArticleComponent art={this.state.article} />
            <ArticleVoter article={this.state.article} />
            {this.state.article.article_id && (
              <CommentsList
                username={this.props.username}
                artId={this.state.article.article_id}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleArticleView;
