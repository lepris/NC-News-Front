import React, { Component } from "react";
import { fetchAllArticles } from "../db/api";
import HomeViewArticle from "./HomeViewArticle";
import { Erroneous } from "./Erroneous";
import Pagination from "./Pagination";

class HomeView extends Component {
  state = {
    articlesList: [],
    loading: true,
    errMSG: "",
    howMany: 10,
    page: 1,
    pages: []
  };

  componentDidMount = () => {

    this.getArticles();
  };

  componentDidUpdate(prevProps, prevState) {
    const { topic, filter } = this.props;
    if (prevProps.topic !== topic || prevProps.filter !== filter) {
      this.getArticles();
      this.setState({ errMSG: "", page: 1 });
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlePageChange = (value) => {
    this.setState({ page: value })
    this.countPages()
  }

  makePagesArray = (resultsToDisplay) => {
    const totalArticles = this.state.articlesList.length;
    let newTotalPages = Math.ceil(totalArticles / resultsToDisplay);
    let newPagesArray = []
    for (let i = 1; i <= newTotalPages; i++) { newPagesArray.push(i) }
    return newPagesArray
  }

  countPages = () => {
    const newPagesArray = this.makePagesArray(this.state.howMany);
    this.setState({ pages: newPagesArray });
  };

  handleHowManyChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { page, howMany } = this.state;

    const soFar = (+page - 1) * +howMany;
    let newPage = Math.ceil(soFar / value) <= 0 ? 1 : Math.ceil(soFar / value);
    const newPagesArray = this.makePagesArray(value)
    this.setState({ [name]: value, page: newPage, pages: newPagesArray });
  }

  getArticles = () => {
    const { topic, filter } = this.props;
    fetchAllArticles(topic, filter)
      .then(articlesList => {
        if (articlesList) this.setState({ articlesList, loading: false });
        else this.setState({ articlesList: [], loading: false });
      })
      .then(data => this.countPages())
      .catch(err => this.setState({ errMSG: err.message }));
  };

  render() {
    window.scrollTo(0, 0);
    if (this.state.errMSG) return <Erroneous message={this.state.errMSG} />;
    if (this.state.loading) return <div>Loading...</div>;
    if (!this.state.articlesList.length) return <p>no articles</p>;
    const { page, howMany } = this.state;
    const { topic, uri } = this.props;

    const begin = page > 1 ? (+page - 1) * +howMany : 0;
    const end = page > 1 ? (+page - 1) * +howMany + +howMany : +howMany;

    return (
      <>

        <h1>{topic || 'All'} articles section</h1>
        <h4>{this.props.uri}</h4>
        <div>
          <span>
            {this.state.pages.length > 1 && <Pagination
              name="page"
              pages={this.state.pages}
              handlePageChange={this.handlePageChange}
            />}
          </span>

          <span>results per page</span>
          <select
            name="howMany"
            value={this.state.howMany}
            onChange={this.handleHowManyChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
        </div>
        <div>
          {this.state.articlesList
            .slice(begin, end)
            .map((art, ind) => {
              return <HomeViewArticle key={ind} index={ind} path={uri} article={art} />;
            })}
        </div>
      </>
    );
  }
}

export default HomeView;
