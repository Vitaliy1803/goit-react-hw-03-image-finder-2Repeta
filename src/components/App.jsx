import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import PixabayApi from './PixabayApi/PixabayApi';


export default class App extends Component {
  state = {
    query: '',
  };

  handleSearch = query => {
    // console.log('query :>>', query);
    this.setState({query})
  };

  render() {
    
    return (
      <div>
        <Searchbar handleSearch={this.handleSearch} />
        <ToastContainer 
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <PixabayApi query={this.state.query}/>
      </div>
    );
  }
}
