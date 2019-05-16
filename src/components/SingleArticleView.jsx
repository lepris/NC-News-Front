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
    const { loading, err, article } = this.state;
    const { username } = this.props;
    window.scrollTo(0, 0);

    if (loading) return <p>Loading...</p>;
    if (err) return <Erroneous message={err.message} />;
    return (
      <div className='SinglePage'>
        <div className='SingleColumnContainer'>
          <div className='SingleArticleCard'>
            <ArticleComponent art={article} />
            <ArticleVoter article={article} />
            {article.article_id && (
              <CommentsList
                commentCount={article.comment_count}
                username={username}
                artId={article.article_id}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleArticleView;
