import React, { Component } from "react";


class Pagination extends Component {

  handleClick = (e) => {
    const { handlePageChange } = this.props;
    e.preventDefault();
    handlePageChange(e.target.value)
    this.setState({ selected: true })
  }

  render() {
    const { pages, howMany, handleHowManyChange } = this.props;

    return (
      <div>
        <span>

          {pages.map((page, index) => {
            return (
              <button className='contourShadow' key={index} value={page} onClick={this.handleClick}>
                {page}
              </button>
            );
          })}
        </span>

        <span className='Tan'>results per page</span>
        <select
          name="howMany"
          value={howMany}
          onChange={handleHowManyChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
        </select>
      </div>
    )
  }
}

export default Pagination;
