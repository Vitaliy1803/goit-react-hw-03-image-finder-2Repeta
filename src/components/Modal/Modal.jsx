import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Md } from './Modal.styled';


const modalRoot = document.querySelector('#modalRoot');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      return this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay >
        <Md >
          <img src={this.props.pic} alt="" />
        </Md>
      </Overlay>,
      modalRoot
    );
  }
}