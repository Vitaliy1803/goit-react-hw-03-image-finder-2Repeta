import React, { Component } from 'react';
import ImageGallary from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

export default class PixabayApi extends Component {
  state = {
    BASE_URL: 'https://pixabay.com/api/',
    API_KEY: '38612663-104365064c4585898fba93344',
    images: [],
    error: null,
    status: 'idle',
    totalHits: null,
    page: 1,
  };

  

  fetchImage = (QUERY, PAGE) => {
    const { BASE_URL, API_KEY } = this.state;
    

    fetch(
      `${BASE_URL}?q=${QUERY}&page=${PAGE}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(
          new Error(`There are no images with name ${this.props.query}`)
        );
      })
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          status: 'resolved',
          totalHits: data.totalHits,
          query: '',
          page: PAGE
        }));
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  handleMoreLoader = () => {
    const { query } = this.props;
    
    this.setState(prevState => ({ 
      status: 'pending', 
      page: prevState.page + 1 
    }), () => {
      const newPage = this.state.page;
      this.fetchImage(query, newPage);
    });
  };
  

  componentDidUpdate(prevProps, prevState) {
    const QUERY = this.props.query;
    const PAGE = this.state.page;

    if (prevProps.query !== this.props.query) {
      this.setState(
        { status: 'pending', error: null, images: [], page: 1, totalHits: null },
        () => {
          this.fetchImage(QUERY, PAGE);
        }
      );
    }
  }

  render() {
    const { error, status, totalHits, images } = this.state;

    if (status === 'idle') {
      return <div></div>;
    }

    if (status === 'pending') {
      return <div><Loader/></div>;
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <div>
          <ImageGallary images={images} />
          {totalHits > images.length && <Button onClick={this.handleMoreLoader} />}
        </div>
      );
    }
  }
}
