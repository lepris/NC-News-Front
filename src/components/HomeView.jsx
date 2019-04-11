import React, { Component } from "react";
import { fetchAllArticles } from "../db/api";
import HomeViewArticle from "./HomeViewArticle";
import { Erroneous } from "./Erroneous";
import TopicsPanel from "./TopicsPanel";
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
    if (prevProps.topic !== this.props.topic) {
      this.getArticles();
      this.setState({ errMSG: "", page: 1 });
    }
  }

  countPages = () => {
    const totalPages = this.state.articlesList.length;
    let newTotalPages = Math.ceil(totalPages / this.state.howMany);
    let newPagesArray = []

    for (let i = 1; i <= newTotalPages; i++) { newPagesArray.push(i) }
    console.log('this.COUNTPAGES() ', newTotalPages, 'new pages array', newPagesArray)

    this.setState({ pages: newPagesArray });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlePageChange = (value) => {
    this.setState({ page: value })
    this.countPages()
  }

  handleHowManyChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { page, howMany, articlesList } = this.state;

    const soFar = (+page - 1) * +howMany;
    let newPage = Math.ceil(soFar / value)

    const totalArticles = articlesList.length;
    let newTotalPages = Math.ceil(totalArticles / value)
    let newPagesArray = []

    for (let i = 1; i <= newTotalPages; i++) { newPagesArray.push(i) }
    console.log('new total pages', newTotalPages, 'new pages array', newPagesArray)

    // changed default to 1 to prevent page 0
    if (newPage <= 0) newPage = 1;

    this.setState({ [name]: value, page: newPage, pages: newPagesArray });
  }

  getArticles = () => {
    fetchAllArticles(this.props.topic)
      .then(articlesList => {
        if (articlesList) this.setState({ articlesList, loading: false });
        else this.setState({ articlesList: [], loading: false });
      })
      .then(data => this.countPages())
      .catch(err => this.setState({ errMSG: err.message }));
  };

  render() {
    if (this.state.errMSG) return <Erroneous message={this.state.errMSG} />;
    if (this.state.loading) return <div>Loading...</div>;
    if (!this.state.articlesList.length) return <p>no articles</p>;
    const { page, howMany } = this.state;
    const begin = page > 1 ? (+page - 1) * +howMany : 0;
    const end = page > 1 ? (+page - 1) * +howMany + +howMany : +howMany;
    console.log(begin, end)

    return (
      <>
        <TopicsPanel />
        <h1>{this.props.topic || 'All'} articles section</h1>

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
              return <HomeViewArticle key={ind} index={ind} article={art} />;
            })}
        </div>
      </>
    );
  }
}

export default HomeView;
