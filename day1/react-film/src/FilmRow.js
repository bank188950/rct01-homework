import React, { Component } from 'react';
import FilmPoster from './FilmPoster';

class FilmRow extends Component {

  render() {

    let {title,date,posterUrl} = this.props;
    var year = new Date(date);
    return (
      <div className="film-row" >
        <FilmPoster posterUrl={posterUrl} />

        <div className="film-summary">
          <h1>{title}</h1>
          <p>{ year.getFullYear()}</p>
        </div>
      </div> 
    );
  }
}

export default FilmRow;
