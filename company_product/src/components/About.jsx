import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';

// const {spring} = ReactMotion;
// const {Motion} = ReactMotion;

class HoverComp extends React.Component {
  constructor() {
    super();
    this.state = {
      isHover: false,
    };
    this.handleHover = this.handleHover.bind(this);
    this.getSpringProps = this.getSpringProps.bind(this);
  }
  handleHover(active) {
    this.setState({isHover: active});
  }
  getSpringProps() {
    return {
      defaultStyle: {
        scale: 1.15,
        marginTop: 25,
        imageOpacity: 0.7,
        opacity: 0,             
      },
      style:{
        scale: spring(this.state.isHover ? 1 : 1.15),
        marginTop: spring(this.state.isHover ? 22 : 25),
        imageOpacity: spring(this.state.isHover ? 0.4 : 0.7),
        opacity: spring(this.state.isHover ? 1 : 0)    
      },
    };
  }
  render() {
    return (


        <div className='container; list-books-title'>
      <h1>Get to Know "Once Upon A BOOK"</h1>
        <Motion {...this.getSpringProps()}>
          {tweenCollection => {
             let styleImage = {
               transform: 'scale(' + tweenCollection.scale + ')',
               opacity: tweenCollection.imageOpacity, 
             };
             let styleTitle = {
                marginTop: tweenCollection.marginTop + '%',
             };
             let styleSubtitle = {
                opacity: tweenCollection.opacity,
             };
            return (
              <div className='subcontainer'>
              <div
                className='containerImage'
                onMouseOver={this.handleHover.bind(null, true)} 
                onMouseOut={this.handleHover.bind(null, false)}>
                <img
                  style={styleImage}
                  src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg'
                  className='img' />
                <div className='overlay'>
                  <div className='title' style={styleTitle}>What We Have</div>
                  <div className='subtitle' style={styleSubtitle}>
                    <div className='subtitleText'>Built up in 2020, "Once Upon A Book" has cut a specialty for itself in the youngsters’ books section of the distributing business. We have some expertise in books implied for offspring of various ages. The wide scope of books offered by us incorporates fantasies, moral stories, showed story books, reference books, general learning books, sentence structure books, shading books, action books, sticker books and some more.</div>
                  </div>
                </div>
              </div>
             </div>
            );
          }}
        </Motion>
      </div>
    );
  }
}
export default HoverComp;