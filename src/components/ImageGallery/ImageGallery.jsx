import React, { Component } from 'react';
import ImageGallaryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
import Modal from 'components/Modal/Modal';
import { ImageGalleryUl } from './ImageGallery.styled';

export default class ImageGallary extends Component {
  state = {
    showModal: false,
    bigPic: null,
  };

  componentDidMount() {
    document.addEventListener('click', e => {
        console.log('Image clicked', e.target.alt);
      if (e.target.nodeName !== 'IMG') {
        this.setState({ showModal: false });
        
        return;
      } else {
        let picture = this.props.images.filter(obj => {
          return obj.id === parseInt(e.target.alt);
        });
        if (picture[0]) {
          this.setState({ bigPic: picture[0].largeImageURL,
            showModal: true });
        }
      }
    });
  }

  toggleModal = (pic = null) => {
    this.setState(prevState => ({
      showModal: !prevState.showModal, 
      bigPic: pic
    }));
  };

  render() {
    const { images } = this.props;
    const { showModal, bigPic } = this.state;

    return (
      <div>
        <ImageGalleryUl>
          {images.map(image => (
            <ImageGallaryItem
              key={nanoid()}
              smallImgURL={image.webformatURL}
              id={image.id}
            />
          ))}
        </ImageGalleryUl>
        {showModal && bigPic && (
          <Modal onClose={this.toggleModal} pic={bigPic} />
        )}
      </div>
    );
  }
}
