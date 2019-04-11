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
    pages: [1]
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
    let counter = 0;
    let currentPage = 0;

    let howMuch = this.state.howMany;
    let length = this.state.articlesList.length;

    const pagesCount = this.state.articlesList.reduce((totalCount, article) => {
      ++counter;
      if (counter % howMuch === 0) return totalCount.concat(++currentPage);
      if (counter > length - howMuch && counter < length - howMuch + 2)
        return totalCount.concat(++currentPage);
      else {
        return totalCount;
      }
    }, []);
    this.setState({ pages: pagesCount });
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
    this.setState({ [name]: value });
    this.getArticles()
    this.countPages();
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
    const begin = (page - 1) * +howMany;
    const end = ((page - 1) * +howMany) + +howMany;
    console.log(begin, end)

    return (
      <>
        <TopicsPanel />
        <h1>{this.props.topic || 'All'} articles section</h1>

        <div>
          <span>
            <Pagination
              name="page"
              pages={this.state.pages}
              handlePageChange={this.handlePageChange}
            />
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
