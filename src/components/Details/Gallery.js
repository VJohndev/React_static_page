import React, { Component } from 'react';
//Internals
import PRODUCTS from '../Data';
import '../Accessories/styles.css';

class Gallery extends Component {
  render() {
    return (
      <div className="accessories">
        <div className="accessories-title">
          <h4>Gallery</h4>
        </div>
        <div className="items">
          <div className="item-video">
            <div className="product-img">
              <iframe src="https://www.youtube.com/embed/c9eogLPXgFY"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
              </iframe>
            </div>
          </div>
          <div className="item-video">
            <div className="product-img">
              <iframe src="https://www.youtube.com/embed/c9eogLPXgFY"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
              </iframe>
            </div>
          </div>
          <div className="item-video">
            <div className="product-img">
              <iframe src="https://www.youtube.com/embed/c9eogLPXgFY"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen='true'>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Gallery;