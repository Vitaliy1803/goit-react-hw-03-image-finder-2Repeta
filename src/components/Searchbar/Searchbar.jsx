import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import {
  SearchbarDiv,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormButtonSpan,
} from './Searchbar.styled';

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
        <SearchbarDiv className="searchbar">
          <SearchForm className="form" onSubmit={this.handleOnSubmin}>
            <SearchFormButton type="submit" className="button">
              <SearchFormButtonSpan className="button-label">
                <BsSearch />
              </SearchFormButtonSpan>
            </SearchFormButton>

            <SearchFormInput
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={this.state.query}
              required
            />
          </SearchForm>
        </SearchbarDiv>
      </>
    );
  }
}
