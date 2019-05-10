import React, { Component } from "react";

class Pagination extends Component {

  handleClick = (e) => {
    const { handlePageChange } = this.props;
    e.preventDefault();
    handlePageChange(e.target.value)
    this.setState({ selected: true })
  }

  render() {
    const { pages } = this.props;

    return pages.map((page, index) => {
      return (
        <button key={index} value={page} onClick={this.handleClick}>
          {page}
        </button>
      );
    });
  }
}

export default Pagination;
