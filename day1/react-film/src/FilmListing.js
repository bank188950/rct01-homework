import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {

  render() {

    let allFilms = this.props.films.map( (film, index) => ( 
      <FilmRow posterUrl={film.poster_path} key={film.id} title={film.title} date={film.release_date}  />
    ))

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
