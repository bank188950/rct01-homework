import React, { Component } from 'react';

class FilmListing extends Component {

  render() {
    let {posterUrl} = this.props;
    return (
      <img src={'https://image.tmdb.org/t/p/w780/'+posterUrl} alt="" />
    );
  }
}

export default FilmListing;
