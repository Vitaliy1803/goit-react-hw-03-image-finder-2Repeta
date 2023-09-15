import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  state = {
    query: '',
  };
  handleOnSubmin = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
     return toast.error('Enter your search query');
      
    }
    this.props.handleSearch(this.state.query);
    this.setState({ query: '' });
  };

  handleChange = event => {
    this.setState({ query: event.target.value.toLowerCase() });
  };

  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={this.handleOnSubmin}>
            <button type="submit" className="button">
              <span className="button-label">
                <BsSearch />
              </span>
            </button>

            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={this.state.query}
            />
          </form>
        </header>
      </>
    );
  }
}
