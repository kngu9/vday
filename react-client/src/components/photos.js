import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://i.ibb.co/CwpJpcC/20181104-213133.jpg', width: 4, height: 3 },
  { src: 'https://i.ibb.co/fNCL6k5/IMG-20181013-WA0004.jpg', width: 4, height: 3 },
  { src: 'https://i.ibb.co/hdBkyYD/20181202-021633.jpg', width: 3, height: 4 },

  { src: 'https://i.ibb.co/bj9t4mk/20181216-174559.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/ftdHBhc/IMG-0011.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/bPx5kS6/IMG-0024.jpg', width: 4, height: 3 },

  { src: 'https://i.ibb.co/4tCZFWt/IMG-0031.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/2ctwZjQ/IMG-20181216-WA0004.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/bdcHS1x/IMG-0041.jpg', width: 3, height: 4 },

  { src: 'https://i.ibb.co/5xrr7c1/IMG-0077.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/vv0hWpd/IMG-0079.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/VmxjV0p/20181109-224628.jpg', width: 2, height: 4 },

  { src: 'https://i.ibb.co/D8D6CXc/20181013-120234.jpg', width: 4, height: 3 },
  { src: 'https://i.ibb.co/6HBxW6D/20181013-180428.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/rmcHF36/20181014-003234.jpg', width: 3, height: 4 },

  { src: 'https://i.ibb.co/8gG6Pq4/IMG-0266.jpg', width: 2, height: 4 },
  { src: 'https://i.ibb.co/RNXzFWz/IMG-0270.jpg', width: 4, height: 4 },
  { src: 'https://i.ibb.co/sqjrPNM/IMG-20181121-WA0004.jpg', width: 3, height: 4 },

  { src: 'https://i.ibb.co/CmvP3cP/IMG-20181125-WA0000.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/QkmJj6m/IMG-20181013-WA0014.jpg', width: 4, height: 3 },
  { src: 'https://i.ibb.co/5Tg5Yf7/received-1384179481716000.jpg', width: 3, height: 4 },

  { src: 'https://i.ibb.co/xf13yFf/IMG-20181214-WA0002.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/zFW4dk1/IMG-0039.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/R6wKKhK/IMG-20181216-WA0006.jpg', width: 3, height: 4 },

  { src: 'https://i.ibb.co/cNXhCgn/IMG-20181017-WA0000.jpg', width: 4, height: 3 },
  { src: 'https://i.ibb.co/D45KL5g/IMG-20181126-WA0008.jpg', width: 2, height: 4 },
  { src: 'https://i.ibb.co/3y2RCLT/received-2303835929634347.jpg', width: 4, height: 3 },

  { src: 'https://i.ibb.co/XD6mz6D/received-364189511010051.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/X76mmxb/received-1130011930491157.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/vq8HJZt/received-2174945079185180.jpg', width: 4, height: 4 },
  
  { src: 'https://i.ibb.co/jVB5nn8/received-2971766319515519.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/KFcs6jV/Snapchat-1697520003.jpg', width: 2, height: 4 },
  { src: 'https://i.ibb.co/8XHDJjC/IMG-2493.jpg', width: 3, height: 4 },

  { src: 'https://i.ibb.co/7SbQ0cs/IMG-2821.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/4F6hS7j/IMG-5725.jpg', width: 1, height: 1 },
  { src: 'https://i.ibb.co/FqhZ8Bn/IMG-7208.jpg', width: 3, height: 4 },

  { src: 'https://i.ibb.co/rFr9jpC/IMG-3908.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/FnxyH43/IMG-8013.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/VvZc6Ct/IMG-0784.jpg', width: 3, height: 4 },

  { src: 'https://i.ibb.co/ygKnKsJ/IMG-0265.jpg', width: 4, height: 3 },
  { src: 'https://i.ibb.co/kgcx1y5/IMG-20181128-WA0000.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/jZWWkWF/IMG-20181014-WA0020.jpg', width: 4, height: 3 }
];


function columns(containerWidth) {
  let columns = 1;
  if (containerWidth <= 899) columns = 2;
  if (containerWidth >= 900) columns = 3;
  if (containerWidth >= 1500) columns = 4;
  return columns;
}

class Photos extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    return (
      <div>
        <Gallery photos={photos} columns={columns} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}

export default Photos;