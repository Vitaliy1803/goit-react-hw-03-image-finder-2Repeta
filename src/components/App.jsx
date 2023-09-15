import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import PixabayApi from './PixabayApi/PixabayApi';


export default class App extends Component {
  state = {
    query: '',
  };

  handleSearch = query => {
    console.log('query :>>', query);
    this.setState({query})
  };

  render() {
    
    return (
      <div>
        <Searchbar handleSearch={this.handleSearch} />
        <ToastContainer autoClose={3000}/>
        <PixabayApi query={this.state.query}/>
      </div>
    );
  }
}
