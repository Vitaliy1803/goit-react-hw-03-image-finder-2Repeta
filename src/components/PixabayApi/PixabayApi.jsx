import React, { Component } from 'react';

export default class PixabayApi extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '38612663-104365064c4585898fba93344';
    const QUERY = this.props.query;

    if (prevProps.query !== this.props.query) {
      this.setState({ status: 'pending', error: 'null', images: []});
      fetch(
        `${BASE_URL}?q=${QUERY}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
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
          this.setState({ images: data.hits, status: 'resolved' });
        })
        .catch(error => this.setState({ error, status: 'rejected' }))
        
    }
  }

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <div>Напиши шось, МУДАК!</div>;
    }

    if (status === 'pending') {
      return <div>Загрузка...</div>;
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return (
        <div>
          {images.map(image => (
            <img
              key={image.id}
              src={image.previewURL}
              alt={image.tags}
              width="200"
              height="150"
            />
          ))}
        </div>
      );
    }
  }
}
